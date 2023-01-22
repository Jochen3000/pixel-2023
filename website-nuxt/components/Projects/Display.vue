<template>
  <div
    class="favouriteproject"
    v-if="showProjectOverview === true"
    v-on:click="showDetails(index)"
  >
    <img
      :src="project.imageSmall"
      loading="lazy"
      sizes="(max-width: 479px) 39vw, 160px"
      alt=""
    />
    <div class="text-block-3">{{ project.title }}</div>
  </div>
  <div class="project-container" v-if="index === selectedItemIndex">
    <img :src="project.imageUrl" />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { showProjectOverview } = defineProps([
  "project",
  "index",
  "showProjectOverview",
  "selectedItemIndex",
  "showDetails",
]);
</script>
