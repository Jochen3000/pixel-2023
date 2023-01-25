<template>
  <HomeStage />
  <div class="page-container w-container">
    <div class="content wf-section">
      <div class="containerinner content">
        <HomeBlog />
        <div id="projects" class="projectsblock">
          <ProjectsHome />
          <HomeWhatsApp />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// workaround to deal with https://github.com/nuxt/nuxt.js/issues/13471
definePageMeta({
  pageTransition: false,
});
</script>
