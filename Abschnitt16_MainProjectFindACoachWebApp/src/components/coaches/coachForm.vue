<template>
  <form @submit.prevent="submitForm" :class="{ invalid: !firstName.value }">
    <div class="form-control">
      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        v-model.trim="firstName.value"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">Field is required</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.value }">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        v-model.trim="lastName.value"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Field is required</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.value }">
      <label for="description">Description</label>
      <input
        type="text"
        id="description"
        v-model.trim="description.value"
        @blur="clearValidity('description')"
      />
      <p v-if="!description.isValid">Field is required</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.value }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.value"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.isValid">Field is required</p>
    </div>

    <div class="form-control" :class="{ invalid: !areas.value }">
      <h3>Areas of Experties</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isValid">Field is required</p>
    </div>
    <p v-if="!formIsValid">Please fill all the fields</p>
    <base-button> Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['saveData'],
  data() {
    return {
      firstName: {
        value: '',
        isValid: true,
      },
      lastName: {
        value: '',
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
      rate: {
        value: null,
        isValid: true,
      },
      areas: {
        value: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.value.trim() === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.value.trim() === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.value.trim() === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.rate.value === null || this.rate.value <= 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.value.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        desc: this.description.value,
        rate: this.rate.value,
        areas: this.areas.value,
      };

      this.$emit('saveData', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
