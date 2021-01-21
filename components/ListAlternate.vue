<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="item.order"
      :class="[
        Number.isInteger(index / 2)
          ? 'flex-row-reverse my-7 md:flex mb-20'
          : 'my-7 md:flex mb-20',
      ]"
    >
      <div
        :class="[
          Number.isInteger(index / 2) ? 'md:ml-5 flex-1' : 'md:pr-5 flex-1',
        ]"
      >
        <EmbedYoutube v-if="item.video">{{ item.video }}</EmbedYoutube>

        <nuxt-link :to="`${item.dir}/${item.slug}`">
          <nuxt-image
            :src="`/images/${item.image}`"
            sizes="500"
            format="webp"
            height="300"
            class="mb-7"
            v-if="item.image"
            :alt="item.imageAlt"
          ></nuxt-image>
        </nuxt-link>
      </div>

      <div class="flex-1">
        <h3 class="text-2xl mb-2 pt-2 md:pt-0 md:mt-5">
          {{ item.title }}
        </h3>
        <p v-if="!item.description" class="text-md">
          <nuxt-content :document="item"></nuxt-content>
        </p>
        <p v-if="item.description" class="text-md">{{ item.description }}</p>
        <nuxt-link
          v-if="item.dir !== '/videos'"
          :to="`${item.dir}/${item.slug}`"
        >
          <Btn class="mt-3">En Savoir plus</Btn>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
