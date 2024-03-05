const app = Vue.createApp({
  data() {
    return {
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
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails()">{{detailsAreVisible? 'Hide': 'Show details'}} </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>
`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Mauel Lopez",
        phone: "12345 5345",
        email: "dummy@hotmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
