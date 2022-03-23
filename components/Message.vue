<template>
  <section
    v-if="message && message.display"
    :class="'bg-'+message.bgColor+' text-'+message.textColor"
  >
    <div class="container mx-auto py-5 px-5 md:w-10/12 lg:w-9/12 xl:w-7/12 ">
      <div class="md:flex items-center">
        <div class="md:flex-grow">
          <h2>{{message.title}}</h2>
          <p>{{ message.content}}</p>
        </div>
        <div class="md:flex-none mt-3 md:mt-0 justify-items-end">
          <a v-if="message.buttonUrl" :href="message.buttonUrl">
            <Btn :color="message.buttonColor || 'rose-600'">
              {{ message.buttonTitle}}
            </Btn>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    message() {
      return this.general.message
    }
  },
  data(){
    return{
      general:{}
    }
  },
  async created () {
    this.general=await this.$content("general").fetch();
  },
}
</script>

<style scoped></style>
