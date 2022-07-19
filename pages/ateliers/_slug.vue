<template>
  <article>
    <div class="bg-gray-200">
      <HeaderPage :doc="doc" />

      <div
        class="
          container
          mx-auto
          bg-gray-100
          -m-14
          py-12
          pb-24
          px-5
          md:px-12 md:w-10/12
          lg:w-9/12
          xl:w-7/12
          content
        "
      >
        <nuxt-img
          :src="doc.image"
          format="webp"
          sizes="850px"
          fit="inside"
          class="mb-7"
          v-if="doc.image"
          :alt="doc.imageAlt"
        ></nuxt-img>
        <div
          class="text-center"
          v-if="doc.buyUrl && doc.isOpen && doc.buyStart"
        >
          <div class="md:flex justify-center my-7">
            <BuyBtn
              :url="doc.buyUrl"
              :isClosed="!doc.isOpen"
              :discount="discount"
              :price="price"
              class="my-4 md:my-0"
            >
              <template v-if="doc.isLive"> S'inscrire </template>
              <template v-else> Acheter </template>
            </BuyBtn>
            <ContactButton></ContactButton>
          </div>
        </div>

        <nuxt-content class="content" :document="doc"></nuxt-content>
        <div class="text-center" v-if="doc.buyUrl && doc.isOpen && doc.buyEnd">
          <div class="md:flex justify-center">
            <BuyBtn
              :url="doc.buyUrl"
              :isClosed="!doc.isOpen"
              :discount="discount"
              :price="price"
              class="my-7 md:mt-4"
            >
              <template v-if="doc.isLive"> S'inscrire </template>
              <template v-else> Acheter </template>
            </BuyBtn>
            <ContactButton class="md:ml-4 md:mt-4"></ContactButton>
          </div>
        </div>

        <div
          v-if="!doc.isOpen"
          class="bg-dark text-secondary py-8 px-5 mt-10 rounded-md"
        >
          <div class="container mx-auto">
            <h2 class="mb-5">
              Les inscriptions à cet atelier sont actuellement fermées
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div class="flex md:col-span-7 lg:col-span-7 items-center">
                <div>
                  <p>
                    <span class="font-semibold text-lg"
                      >Pas de panique, l'atelier ouvrira prochainement !
                    </span>
                    <span v-if="doc.codeMailingList">
                      <br />Pour être tenu au courant de l'actualité de l'
                      atelier "{{ doc.title }}", saisissez ici votre adresse
                      email. Vous ne recevrez que les informations concernant
                      cet atelier et vous ne serez pas abonné automatiquement à
                      <nuxt-link class="underline" to="/emails-prives"
                        >la Lettre Psy</nuxt-link
                      >.
                    </span>
                  </p>
                </div>
              </div>

              <div
                v-if="doc.codeMailingList"
                class="flex-1 md:col-span-5 lg:col-span-5"
              >
                <NewsletterForm :codeList="doc.codeMailingList" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import ContactButton from "@/components/ContactButton.vue";
import Countdown from "@/components/Countdown.vue";

export default {
  components: {
    ContactButton,
    Countdown,
  },
  async asyncData({ $content, params }) {
    const doc = await $content("ateliers", params.slug || "index")
      .where({ isDisplayed: true })
      .fetch();
    return { doc };
  },
  computed: {
    discount() {
      return {
        discountTitle: this.doc.discountTitle,
        discountFrom: this.doc.discountFrom,
        discountTo: this.doc.discountTo,
        hasDiscount: this.doc.hasDiscount || false,
      };
    },
  },
  head() {
    const ogImage = this.doc.imageOG || this.doc.image;

    return {
      title: this.doc.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.doc.description,
        },
        { name: "og:title", content: this.doc.title },
        { name: "og:type", content: "article" },
        { name: "og:site_name", content: "catherine La Psy" },
        {
          name: "og:image",
          content: `https://catherinelapsy.com${ogImage}`,
        },
        {
          name: "og:image:alt",
          content: `Vignette de présentation de l'atelier`,
        },
        {
          name: "og:description",
          content: this.doc.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.content {
  h3 {
    color: #177e84 !important;
  }
}
</style>
