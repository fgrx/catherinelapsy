<template>
  <article>
    <div class="bg-gray-100">
      <HeaderPage :doc="doc" />
      <div
        class="container mx-auto py-5 px-5 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
      >
        <h2>Tous nos Ateliers Psy</h2>

        <p>
          Les Ateliers psy de Catherine La Psy n’ont pas pour vocation de
          remplacer une psycho-thérapie physique. Ils sont là pour vous
          accompagner sur des sujets précis à votre rythme, chez vous, avec
          toutes les ressources nécessaires pour effectuer vous-même un premier
          travail
        </p>
        <ListAlternate :items="ateliers"> </ListAlternate>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const ateliers = await $content("ateliers")
      .where({ isDisplayed: true })
      .sortBy("order", "desc")
      .fetch();
    return { ateliers };
  },
  data() {
    return {
      doc: {
        title: "Tous les ateliers",
        logo: "computer.svg",
        description:
          "Des ateliers de psychothérapie à destination des particuliers et professionnels.",
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
