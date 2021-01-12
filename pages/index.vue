<template>
  <div>
    <section>
      <Header />
    </section>

    <section>
      <Newsletter />
    </section>

    <section>
      <Product :product="general.product" />
    </section>

    <section>
      <SocialNetworks :socialNetworks="general.socialNetworks" />
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
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
