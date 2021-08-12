<template>
  <div class="text-center" v-if="isclosed === 'false'">
    isclosed : {{ isclosed }}
    <p>url : {{ url }}</p>
    <a :href="url">
      <Btn class="mt-5 mb-16">
        Acheter
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
      default: "",
    },
    isclosed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
