<template>
  <div>
    <nav class="w-full bg-gray-900 py-1 mb-70 shadow-lg">
      <div class="container mx-auto flex justify-between">
        <div class="items-center px-5 py-2 mt-0">
          <div class="text-white font-medium text-lg hover:text-red-500">
            <nuxt-link to="/">
              <div class="title_site_1">Catherine</div>
              <div class="space-x-2">
                <div class="title_site_1 inline-block">la</div>
                <div class="title_site_2 inline-block">Psy</div>
              </div>
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
                  <li
                    @mouseenter="displaySubMenu(link)"
                    @mouseleave="displaySubMenu({})"
                    v-for="(link, index) in links"
                    :key="index"
                  >
                    <nuxt-link
                      :to="link.to"
                      class="inline-block no-underline hover:text-red-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                      >{{ link.text }}</nuxt-link
                    >

                    <SubNav
                      :isDisplayed="linkToDisplay"
                      :menu="link"
                      :toggle="true"
                      :links="link.children || ateliersMenus"
                      v-if="link.meta.subMenu"
                    />
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
        <div class="p-5 text-white font-medium text-lg hover:text-red-200">
          <nuxt-link to="/">
            <div class="title_site_1">Catherine</div>
            <div class="space-x-2 mt-3">
              <div class="title_site_1 inline-block">la</div>
              <div class="title_site_2 inline-block">Psy</div>
            </div>
          </nuxt-link>
        </div>

        <ul class="ml-5 mt-12">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="font-medium text-xl py-2 hover:text-red-200"
            @click="isOpen = false"
          >
            <nuxt-link :to="link.to">{{ link.text }}</nuxt-link>
            <SubNav
              :isDisplayed="linkToDisplay"
              :menu="link"
              :toggle="false"
              :isRaw="true"
              :links="link.children || ateliersMenus"
              v-if="link.meta.subMenu"
            />
          </li>
        </ul>

        <div class="fixed bottom-0 w-full"></div>
      </aside>
    </nav>
  </div>
</template>

<script>
import SubNav from "@/components/SubNav.vue";

export default {
  components: {
    SubNav,
  },

  async fetch() {
    const ateliers = await this.$content("ateliers")
      .where({ isDisplayed: true })
      .sortBy("order", "desc")
      .fetch();

    const menus = ateliers.map((atelier) => {
      const menu = {
        title: atelier.title,
        to: `/ateliers/${atelier.slug}`,
        image: "",
      };
      return menu;
    });

    this.ateliersMenus = menus;
  },
  fetchOnServer: true,
  data() {
    return {
      ateliers: [],
      ateliersMenus: [],
      isOpen: false,
      linkToDisplay: {},
      links: [
        {
          id: "atelier",
          text: "Ateliers Psy",
          to: "/ateliers",
          meta: { subMenu: true },
        },
        {
          id: "ressources",
          text: "Ressources Psy",
          to: "/ressources-psy",
          meta: { subMenu: true },
          children: [
            {
              title: "Podcast",
              to: "/podcast",
              href: null,
              image: "",
            },
            {
              title: "Lettre Psy",
              to: "/emails-prives",
              href: null,
              image: "",
            },
            {
              title: "Articles",
              to: "/posts",
              href: null,
              image: "",
            },
            {
              title: "Instagram",
              to: null,
              href: "https://www.instagram.com/catherine_la_psy/",
              image: "",
            },
            {
              title: "Vidéos Youtube",
              href: null,
              to: "/videos",
              image: "",
            },
            {
              title: "Cartes Psy",
              to: "/latelierpsy",
              image: "",
              href: null,
            },
          ],
        },
        {
          id: "a-propos",
          text: "A propos",
          to: "/qui-sommes-nous",
          meta: { subMenu: false },
        },
        {
          id: "contact",
          text: "Contact",
          to: "/contact",
          meta: { subMenu: false },
        },
      ],
    };
  },
  computed: {
    ateliersMenusComputed() {
      return this.ateliersMenus;
    },
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    displaySubMenu(link) {
      this.linkToDisplay = link;
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

<style scoped>
.title_site_1 {
  padding-top: 0.5em;
  font-size: 0.8em;
  line-height: 0.5em;
  font-family: "Playfair Display", sans-serif;
  font-style: italic;
  transform: rotate(-11deg);
}
.title_site_2 {
  font-size: 1.3em;
  line-height: 1.1em;
  font-family: "Playfair Display", sans-serif;
  font-style: italic;
  transform: rotate(-15deg);
}

li {
  font-family: "Lexend Deca";
}

li .nuxt-link-active {
  color: #f87171;
}
</style>
