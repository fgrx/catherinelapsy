<template>
  <div class="md:flex flex-wrap md:justify-arround mb-8">
    <div v-if="titleclock" class="md:w-1/4 mt-5 px-5 text-center container">
      <img
        src="@/assets/pictos-ateliers/clock.png"
        class="mx-auto"
        alt=""
        width="80"
        height="80"
      />

      <p class="mt-3">
        <span class="text-lg font-semibold text-primary">
          {{ titleclock }} <br />
        </span>
        {{ subtitleclock }}
      </p>
    </div>

    <div class="md:w-1/4 mt-10 md:mt-5 px-5 text-center">
      <img
        class="mx-auto"
        src="@/assets/pictos-ateliers/update.png"
        alt=""
        width="80"
        height="80"
      />
      <p class="mt-3">
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
        src="@/assets/pictos-ateliers/infinite.png"
        alt=""
        width="80"
        height="80"
      />
      <p class="mt-3">
        <span class="text-lg font-semibold text-primary">Accès illimité</span>
        <br />
        Prenez votre temps, vous avez accès à l'atelier autant de temps que vous
        le souhaitez
      </p>
    </div>

    <div class="md:w-1/4 mt-5 px-5 text-center container">
      <img
        src="@/assets/pictos-ateliers/folder.png"
        class="mx-auto"
        alt=""
        width="80"
        height="80"
      />

      <p class="mt-3">
        <span class="text-lg font-semibold text-primary">
          Des documents de travail </span
        ><br />
        pour vous accompagner
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleclock: {
      type: String,
      default: "",
    },
    subtitleclock: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
