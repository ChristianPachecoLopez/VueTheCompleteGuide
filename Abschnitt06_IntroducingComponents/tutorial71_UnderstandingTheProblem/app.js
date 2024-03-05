const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: true,
      friends: [
        {
          id: "manuel",
          name: "Mauel Lopez",
          phone: "12345 5345",
          email: "dummy@hotmail.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "32424 5345",
          email: "julieJones@hotmail.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails(id) {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
