<template>
  <div class="testimonial mt-4 mb-8">
    <div class="center">
      <img
        :src="require(`@/static/logos/${image}.webp`)"
        alt=""
        height="150"
        width="150"
        class="object-center"
      />
    </div>
    <blockquote class="text-center">
      <p class="italic">"<slot></slot>"</p>
      <cite class="not-italic font-semibold">{{ author }}</cite>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "woman1",
    },
    author: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.testimonial {
  width: 60%;
  border: 1px solid rgb(213, 213, 213);
  background-color: rgb(236, 236, 236);
  padding: 2em;
  margin-right: 2em;

  img {
    text-align: center;
    margin: auto;
  }
}
</style>
