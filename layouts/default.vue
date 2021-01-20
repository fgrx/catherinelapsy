<template>
  <div>
    <NavBar />
    <Nuxt />
    <Footer />
    <CookieControl locale="fr" />
  </div>
</template>

<script>
export default {
  transition: {
    name: "page",
    mode: "out-in",
  },
};
</script>

<style>
h2 {
  font-size: 2em;
  font-family: "Spartan", sans-serif;
}

h1 {
  font-family: "Lexend Deca", sans-serif;
}

.slide-enter {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}

.nuxt-content h2 {
  margin-top: 1em;
}

.nuxt-content p {
  margin-bottom: 1em;
}

.nuxt-content a {
  font-weight: bold;
  text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
/* .page-enter,
.page-leave-to {
  opacity: 0;
} */

.page-enter {
  transform: translateX(-100px);
  opacity: 0;
}

.page-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
