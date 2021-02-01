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
          fit="inside"
          sizes="300,300:600,600:900,900:1200"
          class="mb-7"
          v-if="doc.image"
          :alt="doc.imageAlt"
        ></nuxt-img>

        <nuxt-content :document="doc"></nuxt-content>
        <div class="text-center" v-if="doc.buyUrl">
          <a :href="doc.buyUrl">
            <Btn class="mt-20">
              Acheter
              <template slot="subText"
                ><div>Vous serez redirigé sur podia.com</div></template
              >
            </Btn>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content("ateliers", params.slug || "index").fetch();
    return { doc };
  },
  head() {
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
          content: `https://catherinelapsy.com${this.doc.image}`,
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

<style scoped>
</style>
