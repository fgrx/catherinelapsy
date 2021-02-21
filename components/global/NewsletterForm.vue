<template>
  <form
    action="https://app.getresponse.com/add_subscriber.html"
    accept-charset="utf-8"
    method="post"
  >
    <div>
      <label class="block font-medium" for="email"
        >Saisissez votre adresse email :</label
      >
      <div class="flex">
        <input
          type="text"
          name="email"
          id="email"
          class="flex-1 required email input w-full px-3 py-2 pb-2"
          placeholder="martin.dubois@gmail.com"
        />
        <input
          type="submit"
          value="s'inscrire"
          id="mc-embedded-subscribe"
          class="flex font-bold text-gray-700 bg-gray-300 hover:bg-gray-400 px-5 py-3 text-black text-bold"
        />
        <input type="hidden" name="campaign_token" :value="codeList" />
        <input type="hidden" name="start_day" value="0" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    codeList: {
      type: String,
      default: "qD1uT",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
