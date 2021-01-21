<template>
  <article>
    <div class="bg-gray-200">
      <HeaderPage :doc="doc" />

      <div
        class="container mx-auto bg-gray-100 -m-14 py-12 pb-24 px-5 md:px-12 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
      >
        <nuxt-image
          :src="`/images/${doc.image}`"
          format="webp"
          fit="inside"
          sizes="300,300:600,600:900,900:1500"
          class="mb-7"
          v-if="doc.image"
          :alt="doc.imageAlt"
        ></nuxt-image>

        <nuxt-content :document="doc"></nuxt-content>
        <div class="text-center">
          <a :href="doc.buyUrl">
            <Btn class="mt-20">
              <div class="text-xl" v-if="doc.promo">Promotion ! <br /></div>
              Acheter
              <span v-if="!doc.promo && doc.price"> {{ doc.price }}€</span>
              <div v-else>
                <span class="line-through" v-if="doc.price"
                  >{{ doc.price }}€</span
                >
                <span class="text-xl">{{ doc.promo }}€</span>
              </div>

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
</style>
