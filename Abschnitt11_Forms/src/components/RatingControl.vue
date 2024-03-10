<template>
  <ul>
    <li :class="{ active: activeOption === 'Poor' }">
      <button type="button" @click="activate('Poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'Avarage' }">
      <button type="button" @click="activate('Avarage')">Avarage</button>
    </li>
    <li :class="{ active: activeOption === 'Great' }">
      <button type="button" @click="activate('Great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: purple;
}

.active button {
  color: purple;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
