<template>
  <form action="">
    <div class="form-control">
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <input type="text" id="description" v-model.trim="description" />
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate" />
    </div>

    <div class="form-control">
      <h3>Areas of Experties</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas" />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas" />
        <label for="career">Career Advisory</label>
      </div>
    </div>
    <base-button> Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: [],
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      const newCoach = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        hourlyRate: this.rate,
        areas: this.areas,
      };
      console.log(newCoach);
    },
  },
};
</script>
