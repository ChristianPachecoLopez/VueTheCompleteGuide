<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // do something with the users data
      this.$router.push('/teams');
      // this.$router.push({ name: 'teams' });
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const isConfirmed = confirm('Are you sure you want to leave?');
      next(isConfirmed);
    }
  },
  unmounted() {
    console.log('unmounted');
  },
  saveChanges() {
    this.changesSaved = true;
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
