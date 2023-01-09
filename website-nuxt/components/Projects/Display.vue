<template>
  <div
    class="favouriteproject"
    v-if="showProjectOverview === true"
    v-on:click="showDetails(index)"
  >
    <img
      v-if="project.attributes.preview_image.data"
      :src="
        config.public.baseUrl +
        project.attributes.preview_image.data.attributes.url
      "
      loading="lazy"
      sizes="(max-width: 479px) 39vw, 160px"
      alt=""
    />
    <div class="text-block-3">{{ project.attributes.title }}</div>
  </div>
  <div class="project-container" v-if="index === selectedItemIndex">
    <img
      v-if="project.attributes.image.data"
      :src="
        config.public.baseUrl + project.attributes.image.data.attributes.url
      "
      loading="lazy"
    />
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
