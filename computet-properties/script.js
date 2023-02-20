Vue.createApp({
  data() {
    return {
      userName: "Peter Parker",
      regionCode: "en-us",
    };
  },
  computed: {
    currentDate() {
      return new Date().toLocaleString(this.regionCode);
    },
  },
}).mount("#app");
