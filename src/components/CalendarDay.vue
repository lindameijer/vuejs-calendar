<template>
  <div :class="classObject" @click="captureClick">
    {{ day.format('D') }}
    <ul class="event-list">
      <li v-for="event in events" :key="event.idx">{{ event.description }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["day"],
  computed: {
    events() {
      let mockData = [
        {
          description: "Random event1",
          date: this.$moment("2019-03-06", "YYYY-MM-DD")
        },
        {
          description: "Random event2",
          date: this.$moment("2019-03-21", "YYYY-MM-DD")
        },
        {
          description: "Random event3",
          date: this.$moment("2019-04-06", "YYYY-MM-DD")
        }
      ];
      return mockData.filter(event => event.date.isSame(this.day, "day"));
    },
    classObject() {
      let today = this.day.isSame(this.$moment(), "day");
      return {
        day: true,
        today,
        past: this.day.isSameOrBefore(this.$moment(), "day") && !today
      };
    }
  },
  methods: {
    captureClick(event) {
      this.$store.commit("eventFormPos", {
        x: event.clientX,
        y: event.clientY
      });
      this.$store.commit("eventFormActive", true);
    }
  }
};
</script>