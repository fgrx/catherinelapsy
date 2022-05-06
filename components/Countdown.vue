<template>
  <div class="my-6 text-dark" v-if="!over && loaded">
    <h3 class="text-3xl mb-2 text-center"><slot></slot></h3>

    <div class="flex text-center justify-center">
      <div class="days countdown-element">
        <div class="countdown-number bg-secondary">
          {{ displayDays }}
        </div>
        <div class="countdown-text">Jours</div>
      </div>
      <div class="countdown-dots">:</div>
      <div class="hours countdown-element">
        <div class="countdown-number bg-secondary">{{ displayHours }}</div>
        <div class="countdown-text">Heures</div>
      </div>
      <div class="countdown-dots">:</div>
      <div class="minutes countdown-element">
        <div class="countdown-number bg-secondary">{{ displayMinutes }}</div>
        <div class="countdown-text">Minutes</div>
      </div>
      <div class="countdown-dots"></div>
      <div class="seconds countdown-element">
        <div class="countdown-number bg-secondary">{{ displaySeconds }}</div>
        <div class="countdown-text">Secondes</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    deadline: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      over: false,
      loaded: false,
    };
  },
  computed: {
    _seconds() {
      return 1000;
    },
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(this.deadline);
        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          this.over = true;
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);

        this.loaded = true;
      }, this._seconds);
    },
  },
};
</script>

<style lang="scss" scoped>
.countdown {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.countdown-number {
  padding: 1em;
  font-size: 2em;

  border-radius: 20px;
}

.countdown-element {
  text-align: center;
}

.countdown-dots {
  font-size: 2em;
  margin-right: 0.3em;
  margin-left: 0.3em;
  margin-top: 1em;
}

.countdown-text {
  font-size: 1.2em;
  color: rgb(58, 58, 58);
}
</style>
