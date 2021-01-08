<template>
  <div
    class="bg-cover bg-center"
    :style="
      'background-image: url(' + require(`@/assets/${product.image}`) + ')'
    "
  >
    <div class="bg-opacity-40 bg-black">
      <div
        class="md:h-2/3 md:w-2/3 px-5 md:px-0 container mx-auto py-32 items-center text-white"
      >
        <h2 class="text-center">{{ product.titleSection }}</h2>
        <h3 class="text-center text-4xl md:text-5xl lg:text-7xl">
          {{ product.title }}
        </h3>
        <p class="mt-5 text-lg md:text-2xl">{{ product.description }}</p>
        <div class="flex mt-5 justify-center">
          <Button color="rose-600">En savoir plus</Button>
          <Button class="ml-5" color="rose-600">Tous les ateliers</Button>
        </div>
      </div>
    </div>
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
</style>
