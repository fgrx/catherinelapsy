<template>
  <div>
    <LazyHydrate when-visible>
      <section>
        <TopHome />
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section>
        <Newsletter />
      </section>
    </LazyHydrate>

    <LazyHydrate
      v-for="(product, index) in general.products"
      :key="index"
      when-visible
    >
      <section>
        <Product :product="product" />
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section>
        <SocialNetworks :socialNetworks="general.socialNetworks" />
      </section>
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";
import TopHome from "@/components/home/TopHome";
import Newsletter from "@/components/home/Newsletter";
import Product from "@/components/home/Product";
import SocialNetworks from "@/components/home/SocialNetworks";

export default {
  async asyncData({ $content }) {
    const general = await $content("general").fetch();

    return {
      general,
    };
  },

  components: {
    LazyHydrate,
    Product,
    SocialNetworks,
    Newsletter,
    TopHome,
  },

  head() {
    return {
      script: [
        {
          src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
          async: true,
        },
      ],
    };
  },
};
</script>

<style>
h3 {
  font-family: "Lexend Deca", sans-serif;
  margin-top: 1rem;
  margin-bottom: 0.5em;
  font-size: 1.2rem;
}
</style>
