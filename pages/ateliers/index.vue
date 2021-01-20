<template>
  <article>
    <div class="bg-gray-100">
      <HeaderPage :doc="doc" />
      <div
        class="container mx-auto py-5 px-5 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
      >
        <h2>Tous les ateliers de psychologie</h2>
        <ListAlternate :items="ateliers"> </ListAlternate>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const ateliers = await $content("ateliers").sortBy("order", "desc").fetch();
    return { ateliers };
  },
  data() {
    return {
      doc: {
        title: "Tous les ateliers",
        logo: "computer.svg",
        description:
          "Catherine la Psy propose des ateliers de psychologie en ligne à destination des particuliers et des professionnels.",
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
