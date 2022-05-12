<template>
  <div>
    <button
      @click="clickAction"
      :type="typeButton"
      :disabled="disabled"
      :class="`inline-block pulse px-6 py-3 text-md font-medium leading-6 text-center text-${textColor}  transition bg-${bgColor} hover:text-secondary  hover:border-white hover:border-1 rounded shadow ripple hover:shadow-lg focus:outline-none `"
    >
      <span class="uppercase">
        <slot></slot>
      </span>
      <span class="text-xs"><slot name="subText"></slot></span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
    textColor: {
      type: String,
      default: "white",
    },
    typeButton: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "#",
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

<style lang="scss" scoped>
button {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  text-transform: uppercase;
  font-size: 1rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #2f2d2e;
    color: "#fdea43";

    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    color: "#fdea43";
    &:before {
      width: 100%;
    }
  }
}
</style>
