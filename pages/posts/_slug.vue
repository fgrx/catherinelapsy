<template>
  <div class="bg-gray-200">
    <article>
      <div>
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

          <nuxt-content class="content" :document="doc"></nuxt-content>
        </div>
      </div>
    </article>
    <div
      class="container mx-auto bg-gray-100 -m-14 pb-14 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
    ></div>
    <Newsletter title="Envie d'en savoir plus ? Abonnez-vous à la Lettre Psy" />
  </div>
</template>

<script>
import Newsletter from "@/components/home/Newsletter";

export default {
  async asyncData({ $content, params }) {
    const doc = await $content("posts", params.slug || "index").fetch();
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

  components: {
    Newsletter,
  },
};
</script>

<style lang="scss">
.content {
  h3 {
    color: #177e84 !important;
    font-size: 1.4em;
  }
}
</style>
