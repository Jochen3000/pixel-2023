<template>
  <div>
    <div class="project" v-if="index === selectedItemIndex">
      <div class="teaserheadline">
        <h3 class="h3-teaser">{{ project.attributes.title }}</h3>
      </div>
      <p class="paragraph-2">
        {{ project.attributes.description }}
      </p>
      <div class="project-tags">
        <div class="tag" v-if="project.attributes.tag1">
          <img
            src="images/tag-icon.svg"
            loading="lazy"
            alt=""
            class="skill-icon"
          />
          <div class="text-block-5">{{ project.attributes.tag1 }}</div>
        </div>
        <div class="tag" v-if="project.attributes.tag1">
          <img
            src="images/tag-icon.svg"
            loading="lazy"
            alt=""
            class="skill-icon"
          />
          <div class="text-block-5">{{ project.attributes.tag2 }}</div>
        </div>
        <div class="tag" v-if="project.attributes.tag3">
          <img
            src="images/tag-icon.svg"
            loading="lazy"
            alt=""
            class="skill-icon"
          />
          <div class="text-block-5">{{ project.attributes.tag3 }}</div>
        </div>
      </div>
      <a :href="project.attributes.weburl" class="view-project w-inline-block"
        ><img
          src="images/link-chevron.svg"
          loading="lazy"
          alt=""
          class="link-chevron"
        />
        <div class="linktext">{{ project.attributes.title }}</div>
      </a>
    </div>
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
