<template>
  <ul>
    <learning-resource
      v-for="resource in storedResources"
      :key="resource.id"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';

export default {
  components: {
    'learning-resource': LearningResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          tittle: 'Official Guide',
          description: 'The official guide to Vue.js',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          tittle: 'Google',
          description: 'Google search engine',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>
