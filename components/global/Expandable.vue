<template>
  <div class="mb-3">
    <div
      @click="isExpanded = !isExpanded"
      class="flex justify-between bg-primary rounded-sm font-semibold text-white p-5 cursor-pointer"
    >
      <div>{{ title }}</div>

      <img
        src="@/assets/arrow-right.svg"
        alt="flèche qui descend"
        height="30"
        width="30"
        v-if="!isExpanded"
      />
      <img
        src="@/assets/arrow-down.svg"
        alt="flèche qui descend"
        height="30"
        width="30"
        v-if="isExpanded"
      />
    </div>

    <div v-if="isExpanded" class="p-5 text-gray-800 bg-gray-200">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
