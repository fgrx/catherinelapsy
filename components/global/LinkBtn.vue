<template>
  <div :class="position">
    <a v-if="url" :href="url" :target="target">
      <Btn :color="color" :textColor="textColor">
        <slot></slot>
      </Btn>
    </a>

    <nuxt-link v-if="to" :to="url">
      <Btn :color="color" :textColor="textColor">
        <slot></slot>
      </Btn>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "gray-200",
    },
    textColor: {
      type: String,
      default: "primary",
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
