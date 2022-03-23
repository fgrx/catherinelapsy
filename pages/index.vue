<template>
  <div>
    <LazyHydrate when-visible>
      <section>
        <Message />
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section>
        <TopHome
          :subtitle="general.siteSubtitle"
          :explanation="general.explanation"
        />
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section>
        <Newsletter />
      </section>
    </LazyHydrate>

    <!-- <LazyHydrate
      v-for="(product, index) in general.products"
      :key="index"
      when-visible
    >
      <section>
        <Product :product="product" />
      </section>
    </LazyHydrate> -->

    <LazyHydrate when-visible>
      <section>
        <div class="pt-10">
          <Ressources />
        </div>
      </section>
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";
import TopHome from "@/components/home/TopHome";
import Message from "@/components/Message.vue";
import Newsletter from "@/components/home/Newsletter";
import Product from "@/components/home/Product";
import Ressources from "@/components/Ressources";

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
    Ressources,
    Newsletter,
    TopHome,
    Message,
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
