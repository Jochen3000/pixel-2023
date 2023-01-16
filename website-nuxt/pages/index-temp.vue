<template>
  <div>
    <header>
      <h1>Sanity + Nuxt</h1>
    </header>
    <main>
      <h2>posts</h2>
      <ul v-if="data?.length">
        <li v-for="post in data" v-bind:key="post._id">
          {{ post.title }}
        </li>
      </ul>
      <p v-else>No posts to show</p>
      <h2>Data</h2>
      <div v-if="data">
        <pre v-if="data">{{ JSON.stringify(data, null, 2) }}</pre>
      </div>
      <div v-else>
        <div>¯\_(ツ)_/¯</div>
        <p>
          Your data will show up here when you've configured everything
          correctly
        </p>
      </div>
    </main>
  </div>
</template>

<!-- // /pages/index.vue -->
<script setup>
const query = groq`*[_type == "post"]`;
const { data } = useSanityQuery(query);
</script>
