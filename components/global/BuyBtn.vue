<template>
  <div class="text-center">
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
      default: ""
    },
    isClosed: {
      type: Boolean,
      default: false
    }
  }
};
</script>
