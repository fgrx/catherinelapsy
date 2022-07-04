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
        <div class="text-center" v-if="doc.buyUrl && doc.isOpen">
          <div class="md:flex justify-center my-7">
            <ContactButton></ContactButton>
          </div>
        </div>

        <nuxt-content class="content" :document="doc"></nuxt-content>
        <div class="text-center" v-if="doc.buyUrl && doc.isOpen">
          <div class="md:flex justify-center">
            <ContactButton class="md:ml-4 md:mt-4"></ContactButton>
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
    const doc = await $content("sejours", params.slug || "index")
      .where({ isDisplayed: true })
      .fetch();
    return { doc };
  },
  computed: {
    discount() {
      return {
        discountTitle: this.doc.discountTitle,
        discountTo: this.doc.discountTo,
        hasDiscount: this.doc.hasDiscount || false,
      };
    },
    price() {
      return this.doc.price;
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
