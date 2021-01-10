<template>
  <div class="overflow-hidden bg-gradient-to-r from-emerald-700 to-emerald-500">
    <div class="container md:mx-auto mt-16 md:mt-0 px-5">
      <div class="md:flex items-center">
        <div class="text-center">
          <h1 class="text-white">
            <div class="title_site_1">Catherine</div>
            <div class="title_site_2">la psy</div>
          </h1>
        </div>
        <div>
          <img
            class="mt-10"
            width="800"
            height="482"
            src="~/assets/catedetour.webp"
            alt="Portrait de Catherine la psy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  filter: drop-shadow(30px 0px 30px rgb(1, 88, 55));
  width: 100%;
}

.title_site_1 {
  font-size: 5.3em;
  line-height: 0em;
  font-family: "Thasadith", sans-serif;
}
.title_site_2 {
  font-size: 7.5em;
  line-height: 1.4em;
  font-family: "Fredericka the Great", sans-serif;
  transform: rotate(-8deg);
}

@media screen and (max-width: 640px) {
  .title_site_1 {
    font-size: 2.2em;
    line-height: 0em;
  }

  .title_site_2 {
    font-size: 4em;
    line-height: 1em;
  }
}
</style>
