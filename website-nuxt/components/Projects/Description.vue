<template>
  <div class="project" v-if="index === selectedItemIndex">
    <div class="teaserheadline">
      <h3 class="h3-teaser">{{ project.title }}</h3>
    </div>
    <p class="paragraph-2">
      {{ project.description }}
    </p>
    <div class="project-tags" v-if="project?.tags">
      <div class="tag" v-for="item in project.tags">
        <img src="/images/tag-icon.svg" alt="tag icon" class="skill-icon" />
        <div class="text-block-5">{{ item }}</div>
      </div>
    </div>
    <a :href="project.external" class="view-project w-inline-block"
      ><img src="/images/link-chevron.svg" alt="chevron" class="link-chevron" />
      <div class="linktext">{{ project.title }}</div>
    </a>
  </div>
</template>

<script setup>
const { showProjectOverview } = defineProps([
  "project",
  "index",
  "showProjectOverview",
  "selectedItemIndex",
  "showDetails",
]);
</script>
