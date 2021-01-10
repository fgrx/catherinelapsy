<template>
  <div class="mt-5">
    <Alert v-if="isSent" type="success" title="Message envoyé"
      >Merci pour votre message, nous nous efforcerons de vous répondre le plus
      rapidement possible.</Alert
    >

    <Alert v-if="error" type="error" title="Erreur : Message non envoyé">{{
      error
    }}</Alert>

    <form v-if="!isSent" name="contact" method="POST" data-netlify="true">
      <p>
        <label class="block"
          >Votre nom :
          <input
            v-model="name"
            type="text"
            name="name"
            :class="`${cssFormLayout}`"
            required
        /></label>
      </p>
      <p class="mt-5">
        <label class="block"
          >Votre adresse email :
          <input
            v-model="email"
            type="email"
            name="email"
            :class="`${cssFormLayout}`"
        /></label>
      </p>
      <p class="mt-5">
        <label class="block"
          >Votre message :
          <textarea
            v-model="message"
            rows="8"
            name="message"
            :class="`${cssFormLayout}`"
          ></textarea>
        </label>
      </p>
      <p>
        <Btn
          @click="sendMessage"
          typeButton="button"
          class="mt-5"
          :color="color"
          :disabled="!isFormCompleted"
          >Envoyer</Btn
        >
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
      isSent: false,
      name: "",
      email: "",
      message: "",
      error: false,
    };
  },
  computed: {
    isFormCompleted() {
      if (
        this.name.length > 3 &&
        this.message.length > 5 &&
        this.isValidEmail(this.email)
      )
        return true;
      return false;
    },
  },
  methods: {
    async sendMessage() {
      if (this.isFormCompleted) {
        const formData = {
          name: this.name,
          email: this.email,
          message: this.message,
        };
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          formData,
          body: new URLSearchParams(formData).toString(),
        });
        this.isSent = true;
      } else {
        this.error = "Veuillez remplir tous les champs s'il vous plait.";
      }
    },
    isValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
</style>
