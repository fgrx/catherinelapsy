<template>
  <div class="overflow-hidden bg-gradient-to-r from-emerald-700 to-emerald-500">
    <div class="container md:mx-auto mt-16 md:mt-0 px-5">
      <div class="md:flex items-center">
        <div class="text-center">
          <h1 class="text-white">
            <div class="title_site_1">Catherine</div>
            <div class="space-x-1">
              <div class="title_site_1 inline-block">la</div>
              <div class="title_site_2 inline-block">Psy</div>
            </div>
          </h1>
        </div>
        <div>
          <nuxt-img
            class="mt-10"
            src="~/assets/catedetour.webp"
            alt="Portrait de Catherine la psy"
            format="webp"
            sizes="300 (webp),400:400 (webp),800:800 (webp)"
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
  font-size: 4.5em;
  line-height: 0em;
  font-family: "Playfair Display", sans-serif;
  font-style: italic;
  transform: rotate(-11deg);
}
.title_site_2 {
  font-size: 10em;
  line-height: 1.1em;
  font-family: "Playfair Display", sans-serif;
  font-style: italic;
  transform: rotate(-15deg);
}

@media screen and (max-width: 640px) {
  .title_site_1 {
    font-size: 3em;
  }

  .title_site_2 {
    font-size: 6.5em;
  }
}
</style>
