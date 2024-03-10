<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperience"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading ...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && results?.length === 0">
        No stored experiences found.
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  mounted() {
    this.loadExperience();
  },
  methods: {
    loadExperience() {
      this.isLoading = true;
      this.errror = null;
      fetch(
        'https://vue-http-demo-27e1a-default-rtdb.europe-west1.firebasedatabase.app/survey.json'
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const key in data) {
            const result = {
              id: key,
              name: data[key].name,
              rating: data[key].rating,
            };
            results.push(result);
          }
          this.results = results;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.errror =
            'An error occurred while loading the submitted experiences.';
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
