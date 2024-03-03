const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmedInput() {
      this.confirmedName = this.name;
    },
    // submitForm(event) {
    // event.preventDefault();
    submitForm() {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(number) {
      this.counter = this.counter + number;
    },
    remove(number) {
      this.counter = this.counter - number;
    },
  },
});

app.mount("#events");
