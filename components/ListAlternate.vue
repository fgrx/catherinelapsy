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
        <!-- <EmbedYoutube v-if="item.video">{{ item.video }}</EmbedYoutube> -->

        <nuxt-link v-if="item.image" :to="`${item.dir}/${item.slug}`">
          <nuxt-img
            :src="item.image"
            sizes="sm:400px"
            format="webp"
            height="300"
            class="mb-7"
            v-if="item.image"
            :alt="item.imageAlt"
          ></nuxt-img>
        </nuxt-link>
      </div>

      <div class="flex-1">
        <h3 class="text-2xl mb-2 mt-0 pt-0">
          {{ item.title }}
        </h3>

        <p v-if="item.description && !item.menuDescription" class="text-md">
          {{ item.description }}
        </p>

        <p v-if="item.discountTo">
          <strong>
            <template v-if="item.discountTitle"
              >{{item.discountTitle}} :
            </template>
            <strike>{{item.discountFrom}}</strike
            >€ {{ item.discountTo}}€</strong
          >
        </p>

        <nuxt-link
          v-if="item.dir !== '/videos'"
          :to="`${item.dir}/${item.slug}`"
        >
          <Btn class="mt-3">{{ textBtn }}</Btn>
        </nuxt-link>

        <a v-if="item.dir === '/videos'" :href="item.url" target="blank">
          <Btn class="mt-3">{{ textBtn }}</Btn>
        </a>
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
    textBtn: {
      type: String,
      default: "En Savoir plus",
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
