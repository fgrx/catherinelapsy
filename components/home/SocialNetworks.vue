<template>
  <div class="bg-gray-200">
    <div class="container mx-auto px-5 pt-5 pb-10">
      <h2 class="mt-5 mb-3 block">Retrouvez moi sur les réseaux sociaux</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div v-for="sn in socialNetworks" key="sn.order">
          <a :href="sn.url">
            <div
              class="border-2 border-gray-600 items-center bg-cover bg-center"
              :style="
                'background-image: url(' + require(`@/assets/${sn.image}`) + ')'
              "
            >
              <div class="py-20 px-10 bg-black bg-opacity-50 text-white flex">
                <img
                  :src="require(`@/assets/${sn.logo}`)"
                  :alt="'Retrouvez moi sur' + sn.title"
                  class="w-20 l-20 flex mr-3"
                />
                <div>
                  <h3 class="text-2xl">{{ sn.title }}</h3>
                  <p class="font-medium">{{ sn.description }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    socialNetworks: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
</style>
