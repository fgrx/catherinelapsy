<template>
  <article>
    <div class="bg-gray-100">
      <HeaderPage :doc="doc" />
      <div
        class="container mx-auto py-5 px-5 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
      >
        <h2>Séjours Psy (mais pas que !)</h2>

        <p>
          Des séjours de plusieurs jours pour travailler sur soi de manière
          intensive dans des cadres bucoliques.
        </p>

        <ListAlternate :items="sejours"> </ListAlternate>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const sejours = await $content("sejours")
      .where({ isDisplayed: true })
      .sortBy("order", "desc")
      .fetch();
    return { sejours };
  },
  data() {
    return {
      doc: {
        title: "Séjours Psy",
        logo: "palm.svg",
        description:
          "Des séjours psy pour travailler sur soi de manière intensive dans des cadres buccoliques.",
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
