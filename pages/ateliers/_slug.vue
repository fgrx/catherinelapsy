<template>
  <article>
    <div class="bg-gray-200">
      <HeaderPage :doc="doc" />

      <div
        class="container mx-auto bg-gray-100 -m-14 py-12 pb-24 px-5 md:px-12 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
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
          <BuyBtn
            :url="doc.buyUrl"
            :isClosed="!doc.isOpen"
            :discount="discount"
          ></BuyBtn>
        </div>

        <nuxt-content class="content" :document="doc"></nuxt-content>
        <div class="text-center" v-if="doc.buyUrl && doc.isOpen && doc.buyEnd">
          <BuyBtn
            :url="doc.buyUrl"
            :isClosed="!doc.isOpen"
            :discount="discount"
          ></BuyBtn>
        </div>

        <div v-if="!doc.isOpen" class="bg-rose-600 text-white py-8 px-5 mt-10">
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
export default {
  async asyncData({ $content, params }) {
    const doc = await $content("ateliers", params.slug || "index").where({isDisplayed: true}).fetch();
    return { doc };
  },
  computed: {
    discount() {
      return {discountTitle:this.doc.discountTitle,discountFrom:this.doc.discountFrom,discountTo:this.doc.discountTo}
    }
  },
  head() {
    return {
      title: this.doc.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.doc.description
        },
        { name: "og:title", content: this.doc.title },
        { name: "og:type", content: "article" },
        { name: "og:site_name", content: "catherine La Psy" },
        {
          name: "og:image",
          content: `https://catherinelapsy.com${this.doc.image}`
        },
        {
          name: "og:description",
          content: this.doc.description
        }
      ]
    };
  }
};
</script>

<style scoped></style>
