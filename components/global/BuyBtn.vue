<template>
  <div class="text-center" v-if="isclosed === false">
    <a :href="url">
      <Btn class="mt-5 mb-16">
        Acheter

        <template v-if="discount && discount.discountTo">
          <strong>
            <strike>{{discount.discountFrom}}</strike
            >€ {{ discount.discountTo}}€</strong
          >
        </template>
        <template slot="subText"
          ><div>Vous serez redirigé sur podia.com</div></template
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
      default: ""
    },
    isclosed: {
      type: Boolean,
      default: false
    },
    discount:{
      type:Object,
      defaut:{}
    }
  }
};
</script>
