<template>
  <div
    class="px-10 py-6 text-xl text-gray flex justify-between items-center border-b border-solid border-gray-light"
    v-if="config.show && !expired"
  >
    <div class="py-4">
      <span class="font-bold">{{ event.title }}</span> -
      <span class="italic">{{ event.location }}</span>
    </div>

    <div class="flex" v-if="!started">
      <div class="border-r border-gray-light text-center px-4">
        <span class="text-blue font-bold block">{{
          countdown.hours | twoDigits
        }}</span>
        <span class="text-xs uppercase block">hrs</span>
      </div>

      <div class="border-r border-gray-light text-center px-4">
        <span class="text-blue font-bold block">{{
          countdown.minutes | twoDigits
        }}</span>
        <span class="text-xs uppercase block">min</span>
      </div>

      <div class="text-center px-4 pr-0">
        <span class="text-blue font-bold block">{{
          countdown.seconds | twoDigits
        }}</span>
        <span class="text-xs uppercase block">sec</span>
      </div>
    </div>

    <div v-else>
      <span class="text-gray text-default">At</span>
      <span class="font-bold text-blue">{{ startTimeFormatted }}</span>
    </div>
  </div>
</template>

<script>
import moment from "moment";
/*
DETAILS:
- Counts down in HH:MM:SS format.
- Once countdown hits 0, it shows the startTime.
- Once expireTime is hit, the component is hidden.
NOTES:
- Requires momentjs for date calculations.
- Requires tailwindcss for styling.
- Handles a countdown of up to 24 hours.
 */

export default {
  filters: {
    twoDigits(value) {
      return ("0" + value).slice(-2);
    },
  },
  props: {
    event: {
      type: Object,
      default: {
        title: "Atelier Live",
        location: "Main Theater",
        startTime: "2019-06-01T12:00:00",
        expireTime: "2019-06-01T13:00:00",
      },
    },
  },
  data() {
    return {
      config: {
        show: true,
        testMode: false,
      },
      countdown: {
        startDiffTime: null,
        expireDiffTime: null,
        hours: null,
        minutes: null,
        seconds: null,
      },
    };
  },
  computed: {
    started() {
      return this.countdown.startDiffTime <= 0;
    },
    expired() {
      return this.countdown.expireDiffTime <= 0;
    },
    startTimeFormatted() {
      return moment(this.event.startTime).format("h:mm A");
    },
  },
  mounted() {
    // Test mode to end countdown soon
    if (this.config.testMode) {
      this.endCountdownSoon();
    }
    this.calculate();
    let secondToWait = 1;
    setInterval(() => {
      this.calculate();
    }, secondToWait * 1000);
  },
  methods: {
    calculate() {
      let now = moment();
      this.countdown.startDiffTime = moment(this.event.startTime).diff(now);
      this.countdown.expireDiffTime = moment(this.event.expireTime).diff(now);
      let duration = moment.duration(
        this.countdown.startDiffTime,
        "milliseconds"
      );
      this.countdown.hours = duration.hours();
      this.countdown.minutes = duration.minutes();
      this.countdown.seconds = duration.seconds();
    },
    // Countdown hits zero and then expires soon after
    endCountdownSoon() {
      this.event.startTime = new moment().add(5, "seconds");
      this.event.expireTime = new moment().add(10, "seconds");
    },
  },
};
</script>
