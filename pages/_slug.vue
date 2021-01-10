<template>
  <div class="bg-gray-200">
    <div class="container mx-auto py-5 px-5 md:px-20 lg:px-40">
      <nuxt-content :document="doc"></nuxt-content>
    </div>
  </div>
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

<style lang="scss" scoped>
</style>
