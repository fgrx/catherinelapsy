<template>
  <article>
    <div class="bg-gray-200">
      <HeaderPage :doc="doc" />

      <div
        class="container mx-auto bg-gray-100 -m-14 py-12 pb-24 px-5 md:px-12 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
      >
        <img
          class="mb-7"
          v-if="doc.image"
          :src="require(`@/static/images/${doc.image}`)"
          :alt="doc.imageAlt"
          height="700"
        />
        <nuxt-content :document="doc"></nuxt-content>
        <div class="text-center">
          <a :href="doc.buyUrl">
            <Btn class="mt-8"
              >Acheter <span>pour {{ doc.price }}€</span>
              <template slot="subText"
                ><div>Vous serez redirigé sur podia.com</div></template
              >
            </Btn>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content("ateliers", params.slug || "index").fetch();
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
