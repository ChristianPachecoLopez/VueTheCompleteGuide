<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="phone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="email" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    submitData() {
      const newFriend = {
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
      this.$emit("add-contact", newFriend);
    },
  },
};
</script>
