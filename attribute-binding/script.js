Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    removeEvent(index) {
      this.fruitBasket.splice(index, 1);
    },
  },
}).mount("#app");
