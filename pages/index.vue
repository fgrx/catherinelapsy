<template>
  <div>
    <Header />
    <div class="bg-grey">
      <h2>Formations</h2>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const general = await $content("general").fetch();

    return {
      general,
    };
  },
  computed: {
    generalData() {
      return this.general.general;
    },
    siteTitle() {
      return this.general.general.siteTitle;
    },
    siteSubTitle() {
      return this.general.general.siteSubtitle;
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
