<template>
  <article>
    <div class="bg-gray-100">
      <HeaderPage :doc="doc" />
      <div
        class="container mx-auto py-5 px-5 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
      >
        <h2>Tous les ateliers de psychologie</h2>
        <div
          v-for="(atelier, index) in ateliers"
          :key="atelier.order"
          :class="[
            Number.isInteger(index / 2)
              ? 'flex-row-reverse mt-10 md:flex mb-20'
              : 'mt-10 md:flex mb-20',
          ]"
        >
          <div
            :class="[
              Number.isInteger(index / 2) ? 'md:ml-5 flex-1' : 'md:pr-5 flex-1',
            ]"
          >
            <nuxt-link :to="`/ateliers/${atelier.slug}`">
              <img
                :src="require(`@/static/images/${atelier.image}`)"
                :alt="`image de l'atelier ${atelier.title}`"
                class="rounded"
              />
            </nuxt-link>
          </div>

          <div class="flex-1">
            <h3 class="text-2xl mb-2">{{ atelier.title }}</h3>
            <p class="text-md">{{ atelier.description }}</p>
            <Btn class="mt-5">En Savoir plus</Btn>
          </div>
        </div>
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
