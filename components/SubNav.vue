<template>
  <nav
    v-show="isVisible"
    :class="!isRaw ? 'absolute bg-dark p-2 z-20 rounded-md' : ''"
  >
    <ul :class="!isRaw ? 'divide-y divide-gray-800' : ''">
      <li
        :class="!isRaw ? 'p-4' : 'p-2'"
        class="text-sm"
        v-for="link in links"
        :key="link.title"
      >
        <a
          v-if="link.href"
          :href="link.href"
          target="blank"
          class="hover:text-secondary"
          >{{ link.title }}</a
        >
        <nuxt-link class="hover:text-secondary" v-if="link.to" :to="link.to">{{
          link.title
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      default: {},
    },
    links: {
      type: Array,
      default: [],
    },
    toggle: {
      type: Boolean,
      default: false,
    },
    isDisplayed: {
      type: Object,
      default: false,
    },
    isRaw: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isVisible() {
      if (this.toggle) {
        return this.isDisplayed.id === this.menu.id ? true : false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
li .nuxt-link-active {
  color: #fdea43;
}
</style>
