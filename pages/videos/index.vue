<template>
  <article>
    <div class="bg-gray-100">
      <HeaderPage :doc="doc" />
      <div
        class="container mx-auto py-5 px-5 md:w-10/12 lg:w-10/12 xl:w-10/12 content"
      >
        <h2>Mes vidéos psy</h2>
        <div
          v-for="(video, index) in videos"
          :key="video.order"
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
            <EmbedYoutube>{{ video.video }}</EmbedYoutube>
          </div>

          <div class="flex-1">
            <h3 class="text-2xl mb-2 pt-2 md:pt-0 md:mt-5">
              {{ video.title }}
            </h3>
            <p class="text-md">
              <nuxt-content :document="video"></nuxt-content>
            </p>
          </div>
        </div>
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
