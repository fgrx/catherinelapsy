<template>
  <div class="mt-5 px-10">
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label class="block"
          >Votre nom:
          <input
            type="text"
            name="name"
            class="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required
        /></label>
      </p>
      <p class="mt-5">
        <label class="block"
          >Votre adresse email:
          <input
            type="email"
            name="email"
            class="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
        /></label>
      </p>
      <p class="mt-5">
        <label class="block"
          >Message:
          <textarea
            name="message"
            class="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          ></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Envoyer</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
