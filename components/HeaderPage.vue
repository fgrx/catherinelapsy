<template>
  <div
    :class="`header

      pb-14
      md:py-10
      mb-5
      bg-gradient-to-r
      from-${doc.colorBg1 || 'teal-700'}
      to-${doc.colorBg2 || 'teal-500'}`"
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
            :class="`text-left text-4xl md:text-5xl lg:text-7xl mb-5 text-${
              doc.colorText || 'white'
            }`"
          >
            {{ doc.title }}
          </h1>
          <p
            :class="`text-left text-xl text-${doc.colorText || 'white'}`"
            v-if="doc.description"
          >
            {{ doc.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    doc: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
.logo-header {
  height: 180px;
  width: auto;
  transform: rotate(0deg);
}
</style>
