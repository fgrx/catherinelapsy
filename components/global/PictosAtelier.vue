<template>
  <div class="md:flex flex-wrap md:justify-arround mb-8">
    <div v-if="displayclock" class="md:flex-1 mt-5 px-5 text-center container">
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

    <div v-if="displayupdate" class="md:flex-1 mt-10 md:mt-5 px-5 text-center">
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

    <div v-if="displayloop" class="md:flex-1 mt-5 px-5 text-center">
      <img
        class="mx-auto"
        src="@/assets/pictos-ateliers/infinite.png"
        alt=""
        width="80"
        height="80"
      />
      <p class="mt-3">
        <span class="text-lg font-semibold text-primary">{{ titleloop }}</span>
        <br />
        {{ subtitleloop }}
      </p>
    </div>

    <div v-if="displayfolder" class="md:flex-1 mt-5 px-5 text-center container">
      <img
        src="@/assets/pictos-ateliers/folder.png"
        class="mx-auto"
        alt=""
        width="80"
        height="80"
      />

      <p class="mt-3">
        <span class="text-lg font-semibold text-primary">
          {{ titlefolder }}</span
        ><br />
        {{ subtitlefolder }}
      </p>
    </div>
  </div>
</template>

<script>
import { stringify } from "querystring";

export default {
  props: {
    displayclock: {
      type: Boolean,
      default: true,
    },
    titleclock: {
      type: String,
      default: "",
    },
    subtitleclock: {
      type: String,
      default: "",
    },
    displayloop: {
      type: Boolean,
      default: true,
    },
    titleloop: {
      type: String,
      default: "Accès illimité",
    },
    subtitleloop: {
      type: String,
      default:
        "Prenez votre temps, vous avez accès à l'atelier autant de temps que vous le souhaitez",
    },
    displayupdate: {
      type: Boolean,
      default: true,
    },
    displayfolder: {
      type: Boolean,
      default: true,
    },
    titlefolder: {
      type: String,
      default: "Des documents de travail ",
    },
    subtitlefolder: {
      type: String,
      default: "pour vous accompagner",
    },
  },
};
</script>

<style lang="scss" scoped></style>
