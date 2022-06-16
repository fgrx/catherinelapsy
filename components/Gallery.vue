<template>
  <section>
    <div :class="`grid md:grid-cols-${images.length} gap-2 my-4`">
      <div class="" v-for="image in images" :key="image">
        <nuxt-img
          :src="`${image}`"
          alt=""
          sizes="sm:300px"
          format="webp"
          width="200"
          height="150"
          fit="cover"
        >
        </nuxt-img>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
