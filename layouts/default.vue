<template>
  <div>
    <NavBar />
    <Message />
    <Nuxt />
    <Footer />
    <CookieControl locale="fr" />
  </div>
</template>

<script>
export default {
  // transition: {
  //   name: "page",
  //   mode: "out-in",
  // },
};
</script>

<style lang="scss">
h2 {
  font-size: 2em;
  font-family: "Lexend Deca", sans-serif;
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

article {
  li {
    list-style-type: disc;
    margin-left: 2em;
  }
}

.content ul {
  margin-bottom: 0.6em;
}

/* .page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}


.page-enter {
  transform: translateX(-100px);
  opacity: 0;
}

.page-leave-to {
  transform: translateX(100px);
  opacity: 0;
} */

table {
  width: 100%;
  margin-top: 2em;
  margin-bottom: 2em;
  border: 1px solid rgb(208, 208, 208);
}

td,
th {
  padding: 1em;
  border-left: 1px solid rgb(208, 208, 208);
  border-right: 1px solid rgb(208, 208, 208);
}

thead,
tr:nth-child(even) {
  background-color: rgb(231, 231, 231);
}
</style>
