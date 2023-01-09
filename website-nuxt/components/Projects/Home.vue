<template>
  <div class="strapline">showcase</div>
  <h2 class="center">Projekte</h2>

  <div class="projectsblockcontainer">
    <div class="projectsdisplay">
      <div class="browser-bar" v-on:click="showOverview">
        <img src="images/light.svg" loading="lazy" alt="" class="safari" />
      </div>
      <div class="screencontainer">
        <div :class="{ screenstartpage: showProjectOverview }">
          <div class="favouitesitesblock">
            <ProjectsDisplay
              v-for="(project, index) in projects.data"
              :project="project"
              :index="index"
              :showProjectOverview="showProjectOverview"
              :selectedItemIndex="selectedItemIndex"
              :showDetails="showDetails"
              class="favouriteproject"
            />
          </div>
        </div>
        <div class="loading-wrapper" :class="{ loading: isLoading }">
          <div
            class="loading-bar"
            :class="{ loadingprogress: isLoadingProgress }"
          />
        </div>
      </div>
    </div>
    <div class="project-intro" v-if="showProjectOverview === true">
      <div class="teaserheadline">
        <h3 class="h3-teaser">
          My project portfolio includes websites and applications for larger
          companies, start-ups and non-profit organizations.
        </h3>
      </div>
      <p>
        Depending on the task, different tools and technologies are used. Here
        is a selection.
      </p>
    </div>
    <ProjectsDescription
      v-for="(project, index) in projects.data"
      :project="project"
      :index="index"
      :showProjectOverview="showProjectOverview"
      :selectedItemIndex="selectedItemIndex"
      :showDetails="showDetails"
      class="projectdescription"
    />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const showProjectOverview = ref(true);
const selectedItemIndex = ref(null);
const isLoading = ref(false);
const isLoadingProgress = ref(false);

const { data: projects } = await useFetch(
  `${config.public.baseUrl}/api/projects?locale=all&populate=*`
);

const showDetails = (index) => {
  showProjectOverview.value = false;
  isLoading.value = true;
  setTimeout(() => {
    isLoadingProgress.value = true;
    selectedItemIndex.value = index;
  }, 250);
  setTimeout(() => {
    isLoading.value = false;
    isLoadingProgress.value = false;
  }, 1250);
};

const showOverview = () => {
  showProjectOverview.value = true;
  selectedItemIndex.value = null;
};
</script>
