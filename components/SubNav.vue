<template>
  <nav v-show="isVisible" class="absolute bg-gray-900 p-2 z-20">
    <ul class="divide-y divide-gray-800">
      <li class="p-4" v-for="link in links" :key="link.title">
        <a
          v-if="link.href"
          :href="link.href"
          target="blank"
          class="hover:text-red-500"
          >{{ link.title }}</a
        >
        <nuxt-link class="hover:text-red-500" v-if="link.to" :to="link.to">{{
          link.title
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: {},
    },
    isDisplayed: {
      type: Object,
      default: false,
    },
  },
  computed: {
    isVisible() {
      return this.isDisplayed.children === this.links ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
li .nuxt-link-active {
  color: #f87171;
}
</style>
