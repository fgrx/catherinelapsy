<template>
  <div class="text-center" v-if="isclosed === false">
    <a :href="url">
      <Btn class="">
        <slot></slot>

        <template v-if="price">
          <template v-if="discount && discount.hasDiscount">
            <strong>
              <strike>{{ price }}</strike
              >€ {{ discount.discountTo }}€</strong
            >
          </template>

          <template v-else> {{ price }}€ </template>
        </template>

        <template slot="subText"
          ><div>(Vous serez redirigé sur podia.com)</div></template
        >
      </Btn>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
    isclosed: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: Object,
      defaut: {},
    },
  },
};
</script>
