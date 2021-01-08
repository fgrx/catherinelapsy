<template>
  <div>
    <section>
      <Header />
    </section>

    <section>
      <Newsletter />
    </section>

    <section>
      <SocialNetworks :socialNetworks="socialNetworks" />
    </section>

    <section>
      <Product :product="product" />
    </section>
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
    socialNetworks() {
      return this.general.general.socialNetworks;
    },
    product() {
      return this.general.general.product;
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
