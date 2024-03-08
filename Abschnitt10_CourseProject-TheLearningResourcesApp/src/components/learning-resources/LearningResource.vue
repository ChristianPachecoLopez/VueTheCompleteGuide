<template>
  <li>
    <div>
      <header>
        <h3>{{ resource.tittle }}</h3>
        <button></button>
      </header>
    </div>
    <p>{{ resource.description }}</p>
    <a :href="resource.link" target="_blank">Go to resource</a>
  </li>
</template>

<script></script>
