<template>
  <div>
    <button
      @click="clickAction"
      :type="typeButton"
      :disabled="disabled"
      :class="`inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-${bgColor} rounded shadow ripple hover:shadow-lg hover:bg-${bgColor} focus:outline-none`"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "rose-600",
    },
    typeButton: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    bgColor() {
      if (this.disabled) return "gray-400";
      return this.color;
    },
  },
  methods: {
    clickAction() {
      this.$emit("click", "btn-click");
    },
  },
};
</script>

<style scoped>
</style>
