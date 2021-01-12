<template>
  <article>
    <div class="bg-gray-100">
      <HeaderPage :doc="doc" />

      <div
        class="container mx-auto py-5 px-5 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
      >
        <nuxt-content :document="doc"></nuxt-content>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug || "index").fetch();
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
      ],
    };
  },
};
</script>

<style scoped>
</style>
