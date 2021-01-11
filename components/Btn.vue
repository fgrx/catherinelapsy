<template>
  <div>
    <button
      @click="clickAction"
      :type="typeButton"
      :disabled="disabled"
      :class="`inline-block px-6 py-3 text-md font-medium leading-6 text-center text-white uppercase transition bg-${bgColor}  hover:border-white hover:border-1 rounded shadow ripple hover:shadow-lg focus:outline-none`"
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
