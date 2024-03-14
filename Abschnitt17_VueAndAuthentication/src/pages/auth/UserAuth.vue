<template>
  <div>
    <base-dialog :show="!!error" title="An error ocurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog fixed :show="isLoading" title="Authentication...">
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <p v-if="!formIsValid" class="errors">
          Please enter a valid email and a password with at least 6 characters.
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">
          {{ switchModeButtonCaption }}
        </base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      return this.mode === 'login' ? 'Login' : 'Register';
    },
    switchModeButtonCaption() {
      return this.mode === 'login' ? 'Register instead' : 'Login instead';
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        this.email.indexOf('@') < 0 ||
        this.password === '' ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      const authData = {
        email: this.email,
        password: this.password,
      };
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', authData);
        } else {
          await this.$store.dispatch('signup', authData);
        }
        const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
        this.$router.replace(redirectUrl);
      } catch (error) {
        this.error = error.message || 'An error occurred';
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      this.mode = this.mode === 'login' ? 'signup' : 'login';
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
