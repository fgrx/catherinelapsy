<template>
  <nav class="w-full bg-gray-900 py-1 mb-70 shadow-lg">
    <div class="container mx-auto flex justify-between">
      <div class="items-center px-5 py-2 mt-0">
        <div class="text-white font-medium text-lg hover:text-red-500">
          <nuxt-link to="/">
            <span class="title_site_1">Catherine</span><br /><span
              class="title_site_2"
              >la Psy</span
            >
          </nuxt-link>
        </div>
      </div>

      <div class="flex items-center justify-end mr-0 md:mr-4">
        <div
          class="hidden md:block md:flex md:justify-between md:bg-transparent"
        >
          <div
            class="flex hidden md:flex md:items-center order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul
                class="md:flex items-center justify-between text-base text-white pt-4 md:pt-0"
              >
                <li>
                  <nuxt-link
                    to="/ateliers"
                    class="inline-block no-underline hover:text-red-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                    >Ateliers</nuxt-link
                  >
                </li>
                <li>
                  <a
                    class="inline-block no-underline hover:text-red-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                    href="https://www.youtube.com/channel/UCuocS66l-pMtFcaP3L01z5Q"
                    >Vidéos</a
                  >
                </li>
                <li>
                  <nuxt-link
                    class="inline-block no-underline hover:text-red-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                    to="/contact"
                    >Contact</nuxt-link
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="items-center mr-0 md:mr-4">
          <label for="menu-toggle" class="cursor-pointer md:hidden block">
            <button
              class="mr-2 text-white"
              aria-label="Open Menu"
              @click="drawer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-8 h-8"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </label>

          <input class="hidden" type="checkbox" id="menu-toggle" />
        </div>
      </div>
    </div>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="transform text-white top-0 left-0 w-64 bg-emerald-800 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="p-5 text-white font-medium text-lg hover:text-red-500">
        <nuxt-link to="/">
          <span class="title_site_1">Catherine</span><br /><span
            class="title_site_2"
            >la Psy</span
          >
        </nuxt-link>
      </div>

      <ul class="ml-5">
        <li class="font-medium text-lg py-2 hover:text-red-500">
          <nuxt-link to="/" @click="isOpen = false">Accueil</nuxt-link>
        </li>
        <li class="font-medium text-lg py-2 hover:text-red-500">
          <nuxt-link to="/ateliers" @click="isOpen = false">Ateliers</nuxt-link>
        </li>
        <li class="font-medium text-lg py-2 hover:text-red-500">
          <a href="https://www.youtube.com/channel/UCuocS66l-pMtFcaP3L01z5Q"
            >Vidéos</a
          >
        </li>
        <li class="font-medium text-lg py-2 hover:text-red-500">
          <nuxt-link to="/contact" @click="isOpen = false">Contact</nuxt-link>
        </li>
      </ul>

      <div class="fixed bottom-0 w-full"></div>
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>

<style  scoped>
.title_site_1 {
  font-size: 0.7em;
  line-height: 0em;
  font-family: "Spartan", sans-serif;
}
.title_site_2 {
  font-size: 1.3em;
  line-height: 1em;
  font-family: "Lexend Deca", sans-serif;
}
</style>
