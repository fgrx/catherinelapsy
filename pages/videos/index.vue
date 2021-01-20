<template>
  <article>
    <div class="bg-gray-100">
      <HeaderPage :doc="doc" />
      <div
        class="container mx-auto py-5 px-5 md:w-10/12 lg:w-10/12 xl:w-10/12 content"
      >
        <h2>Mes vidéos psy</h2>
        <ListAlternate :items="videos"> </ListAlternate>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const videos = await $content("videos").sortBy("order", "desc").fetch();
    return { videos };
  },
  data() {
    return {
      doc: {
        title: "Mes vidéos",
        logo: "video.svg",
        description: "Je publie régulièrement des vidéos sur ma chaine Youtube",
        colorBg1: "red-700",
        colorBg2: "gray-700",
      },
    };
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
h3 {
  font-family: "Lexend Deca", sans-serif;
}
</style>
