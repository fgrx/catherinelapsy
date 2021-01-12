<template>
  <article>
    <div class="bg-gray-100">
      <div
        :class="`header
      py-14
      mb-5
      bg-gradient-to-r
      from-${doc.colorBg1}
      to-${doc.colorBg2}`"
      >
        <div class="container mx-auto py-5 px-5 md:w-10/12 lg:w-9/12 xl:w-7/12">
          <div class="flex items-center">
            <div class="hidden md:block flex-initial mr-10" v-if="doc.logo">
              <img
                :src="require(`@/static/logos/${doc.logo}`)"
                alt=""
                class="logo-header"
              />
            </div>
            <div class="flex-initial">
              <h1
                data-v-a2b46a4c=""
                :class="`text-left text-7xl md:text-5xl lg:text-7xl mb-5 text-${doc.colorText}`"
              >
                {{ doc.title }}
              </h1>
              <p
                :class="`text-left text-xl text-${doc.colorText}`"
                v-if="doc.description"
              >
                {{ doc.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
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
.logo-header {
  height: 120px;
  width: auto;
  transform: rotate(-10deg);
}
</style>
