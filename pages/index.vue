<template>
  <div>
    <section>
      <TopHome />
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

  head() {
    return {
      script: [
        {
          src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
          body: true,
        },
      ],
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
