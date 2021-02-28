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
            <h2>S'abonner à la Lettre Psy</h2>
            <p>
              Recevez tous les dimanches un email pour comprendre la psychologie
              et mieux se connaitre
            </p>
          </div>
        </div>

        <div class="flex-1 md:col-span-5 lg:col-span-4">
          <NewsletterForm />
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
