<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fiends: [
        {
          id: "manuel",
          name: "Manuel Lopez",
          phone: "12345 5345",
          email: "dummy@hotmail.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "32424 5345",
          email: "julieJones@hotmail.com",
        },
      ],
    };
  },
};
</script>
