<template>
  <div class="mt-5">
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label class="block"
          >Votre nom:
          <input type="text" name="name" :class="`${cssFormLayout}`" required
        /></label>
      </p>
      <p class="mt-5">
        <label class="block"
          >Votre adresse email:
          <input type="email" name="email" :class="`${cssFormLayout}`"
        /></label>
      </p>
      <p class="mt-5">
        <label class="block"
          >Votre message:
          <textarea
            rows="8"
            name="message"
            :class="`${cssFormLayout}`"
          ></textarea>
        </label>
      </p>
      <p>
        <Button class="mt-5" :color="color" type="submit">Envoyer</Button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "rose-600",
      cssFormLayout: `block w-full py-3 px-1 mt-2 text-gray-800 appearance-none rounded  focus:${this.color}`,
    };
  },
};
</script>

<style scoped>
</style>
