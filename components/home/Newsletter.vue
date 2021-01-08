<template>
  <div class="bg-rose-600 text-white py-8 px-5">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <div class="flex md:col-span-7 lg:col-span-8 items-center">
          <img
            class="icon md:mr-10 hidden md:block"
            src="@/assets/email1.svg"
            alt=""
          />
          <div class="">
            <h2>Emails privés</h2>
            <p>
              Recevez tous les dimanches des emails pour comprendre la
              psychologie et mieux se connaitre
            </p>
          </div>
        </div>

        <div class="flex-1 md:col-span-5 lg:col-span-4">
          <form
            action="https://app.getresponse.com/add_subscriber.html"
            accept-charset="utf-8"
            method="post"
          >
            <div class="flex">
              <input
                type="text"
                name="email"
                class="flex-1 required email input w-full px-3 py-2 pb-2"
                placeholder="martin.dubois@gmail.com"
              />
              <input type="hidden" name="campaign_token" value="qD1uT" />
              <input type="hidden" name="start_day" value="0" />

              <input
                type="submit"
                value="s'inscrire"
                id="mc-embedded-subscribe"
                class="flex font-bold text-gray-700 bg-gray-300 hover:bg-gray-400 px-5 py-3 text-black text-bold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icon {
  max-height: 8em;
  fill: white;
  /*transform: rotate(25deg);*/
}
</style>
