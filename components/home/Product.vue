<template>
  <div class="bg-opacity-50 bg-black">
    <TextOverImage :image="product.image">
      <div
        class="md:h-2/3 md:w-2/3 px-5 md:px-0 container mx-auto py-24 items-center text-white"
      >
        <h2 class="text-center">{{ product.titleSection }}</h2>
        <h3 class="text-center text-4xl md:text-5xl lg:text-7xl">
          {{ product.title }}
        </h3>
        <p class="mt-5 text-lg md:text-2xl">{{ product.description }}</p>
        <div class="flex mt-5 justify-center">
          <nuxt-link :to="product.url">
            <Btn color="rose-600">En savoir plus</Btn>
          </nuxt-link>
          <nuxt-link to="/ateliers">
            <Btn class="ml-5" color="rose-600">Tous les ateliers</Btn>
          </nuxt-link>
        </div>
      </div>
    </TextOverImage>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-family: "Lexend Deca", sans-serif;
}
</style>
