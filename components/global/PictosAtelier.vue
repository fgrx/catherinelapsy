<template>
  <div class="md:flex flex-wrap md:justify-arround mb-8">
    <div class="md:w-1/4 mt-10 md:mt-5 px-5 text-center">
      <img
        class="mx-auto"
        src="@/assets/update.svg"
        alt=""
        width="100"
        height="100"
      />
      <p>
        <span class="text-lg font-semibold text-primary"
          >Mises à jour gratuites</span
        >
        <br />
        L'atelier est mis à jour gratuitement en fonction de vos questions et
        retours
      </p>
    </div>

    <!-- <div class="w-1/2 px-5 text-center">
      <img src="@/assets/laptop2.svg" alt="" width="100" height="150" />
      <p class="text-lg font-semibold text-teal-700">Atelier en autonomie</p>
      <p>Accédez à votre atelier d'où vous voulez, quand vous voulez.</p>
    </div> -->

    <div class="md:w-1/4 mt-5 px-5 text-center">
      <img
        class="mx-auto"
        src="@/assets/infinite.svg"
        alt=""
        width="100"
        height="100"
      />
      <p>
        <span class="text-lg font-semibold text-primary">Accès illimité</span>
        <br />
        Prenez votre temps, vous avez accès à l'atelier autant de temps que vous
        le souhaitez
      </p>
    </div>

    <div class="md:w-1/4 mt-5 px-5 text-center container">
      <img
        src="@/assets/document.svg"
        class="mx-auto"
        alt=""
        width="100"
        height="100"
      />

      <p>
        <span class="text-lg font-semibold text-primary">
          Des documents supports </span
        ><br />
        pour vous accompagner
      </p>
    </div>

    <div v-if="duration" class="md:w-1/4 mt-5 px-5 text-center container">
      <img
        src="@/assets/clock.svg"
        class="mx-auto"
        alt=""
        width="100"
        height="100"
      />

      <p>
        <span class="text-lg font-semibold text-primary">
          {{ duration }} <br />
        </span>
        de formation en vidéo
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
