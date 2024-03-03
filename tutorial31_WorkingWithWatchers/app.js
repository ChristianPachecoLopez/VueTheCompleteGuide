const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(newValue) {
      if (newValue > 50) {
        setTimeout(() => (this.counter = 0), 2000);
      }
    },
    // name(newValue) {
    //   if (this.newValue === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = newValue + " " + this.lastName;
    //   }
    // },
    // lastName(newValue) {
    //   if (this.newValue === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + newValue;
    //   }
    // },
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") return "";
      return this.name + this.lastName;
    },
    // fullname() {
    //   if (this.name === "") return "";
    //   return this.name + " Schwarzmüller";
    // },
  },
  methods: {
    // outputFullname() {
    //   if (this.name === "") return "";
    //   return this.name + " Schwarzmüller";
    // },
    // setName(event, lastName) {
    //   this.name = event.target.value;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
