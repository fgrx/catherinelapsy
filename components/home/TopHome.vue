<template>
  <div class="overflow-hidden bg-gradient-to-r from-emerald-700 to-emerald-500">
    <div class="container md:mx-auto mt-16 md:mt-0 px-5">
      <div class="md:flex items-center">
        <div class="text-center flex-1">
          <h1 class="text-white">
            <div class="title_site_1">Catherine</div>
            <div class="space-x-1">
              <div class="title_site_1 inline-block">la</div>
              <div class="title_site_2 inline-block">Psy</div>
            </div>
          </h1>
        </div>
        <div class="flex-1">
          <!-- <nuxt-img
            src="home/catedetour.webp"
            sizes="250,300:500,600:800"
            format="webp"
            class="mt-10 portrait-cate"
            layout="responsive"
            alt="Portrait de Catherine La Psy"
            height="482"
            width="800"
          ></nuxt-img> -->
          <img
            :srcset="
              require('@/static/home/catedetour-small.webp') +
              ' 600w, ' +
              require('@/static/home/catedetour.webp') +
              ' 800w'
            "
            sizes="(max-width: 600px) 560px, 800px"
            :src="require('@/static/home/catedetour.webp')"
            class="mt-10"
            quality="50"
            alt="Portrait de Catherine La Psy"
            height="482"
            width="800"
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
    font-size: 2.5em;
  }

  .title_site_2 {
    font-size: 5.5em;
  }

  .portrait-cate {
    height: 200px;
    width: auto;
  }
}
</style>
