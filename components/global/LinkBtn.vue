<template>
  <div :class="position">
    <a v-if="url" :href="url" :target="target">
      <Btn>
        <slot></slot>
      </Btn>
    </a>

    <nuxt-link v-if="to" :to="url">
      <Btn>
        <slot></slot>
      </Btn>
    </nuxt-link>
  </div>
</template>

<script>
import { stringify } from "querystring";

export default {
  props: {
    url: {
      type: String,
      default: "",
    },
    to: { type: String, default: "" },
    target: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "text-center",
    },
  },
};
</script>
