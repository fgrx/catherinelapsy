<template>
  <div class="container mx-auto px-5 pt-5 pb-10">
    <h2 class="mt-5 mb-3 block">Retrouvez moi sur les réseaux sociaux</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        v-for="sn in socialNetworks"
        :key="sn.order"
        class="text-white bg-black bg-opacity-60"
      >
        <a :href="sn.url">
          <TextOverImage :image="`/home/${sn.image}`">
            <div class="py-20 px-10 flex">
              <img
                :src="require(`@/assets/${sn.logo}`)"
                :alt="'Retrouvez moi sur' + sn.title"
                class="w-20 l-20 flex-initial mr-3"
                widh="40"
                height="40"
              />
              <div class="flex-1">
                <h3 class="text-2xl">{{ sn.title }}</h3>
                <p class="font-medium">{{ sn.description }}</p>
              </div>
            </div>
          </TextOverImage>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    socialNetworks: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped></style>
