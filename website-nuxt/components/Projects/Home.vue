<template>
  <div class="strapline">showcase</div>
  <h2 class="center" v-if="$route.path === '/en'">Projects</h2>
  <h2 class="center" v-else>Projekte</h2>

  <div class="projectsblockcontainer">
    <div class="projectsdisplay">
      <div class="browser-bar" v-on:click="showOverview">
        <img src="images/light.svg" loading="lazy" alt="" class="safari" />
      </div>
      <div class="screencontainer">
        <div :class="{ screenstartpage: showProjectOverview }">
          <div class="favouitesitesblock">
            <ProjectsDisplay
              v-for="(project, index) in data"
              :project="project"
              :index="index"
              :showProjectOverview="showProjectOverview"
              :selectedItemIndex="selectedItemIndex"
              :showDetails="showDetails"
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
      <div v-if="$route.path === '/en'">
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
      <div v-else>
        <div class="teaserheadline">
          <h3 class="h3-teaser">
            Mein Projekt-Portfolio umfasst Websites und Applikationen für
            grössere Unternehmen, Start-ups und gemeinnützige Organisationen.
          </h3>
        </div>
        <p>
          Dabei kommen je nach Aufgabenstellung unterschiedliche Tools und
          Technologien zum Einsatz. Hier eine Auswahl.
        </p>
      </div>
    </div>
    <ProjectsDescription
      v-for="(project, index) in data"
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

const route = useRoute();

// get data from sanity
const query = groq`*[_type == "project"]{
  title,
  description,
  tags,
  external,
  "imageSmall": imagepreview.asset->url,
  "imageUrl": image.asset->url
}`;
const { data } = useSanityQuery(query);

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
