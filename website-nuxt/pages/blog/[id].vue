<template>
  <div class="page-container w-container">
    <PostHeader :post="post" :postDate="postDate" />
    <div class="contentsection wf-section">
      <div class="containerinner blog">
        <img
          v-if="post.data.attributes.image.data"
          :src="
            config.public.baseUrl +
            post.data.attributes.image.data.attributes.url
          "
          loading="lazy"
          :alt="post.data.attributes.title"
        />
        <div class="affiliatedisclosure">
          Hinweis: Wir verwenden manchmal Affiliate-Links, was bedeutet, dass
          wir möglicherweise eine Provision erhalten.
        </div>
      </div>
    </div>
    <div class="blogcontent">
      <div class="container">
        <div class="blog-grid">
          <PostSidebar
            :articleTitles="articleTitles"
            :currentSection="currentSection"
            :post="post"
          />
          <!-- post body -->
          <div id="content" class="content-right_blog">
            <div class="rich-text w-richtext">
              <div
                v-html="
                  post.data.attributes.content.replace(
                    /\/uploads/g,
                    config.public.baseUrl + '/uploads'
                  )
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const config = useRuntimeConfig();

const currentSection = ref("");
const postDate = ref("");
const articleTitles = ref("");

// use custom layout for soft scroll
definePageMeta({
  layout: "custom",
});

// fetch data from strapi
const { data: post } = await useFetch(
  `${config.public.baseUrl}/api/posts/${id}?locale=all&populate=*`
);

onMounted(() => {
  // fetch additional data
  const getHeadlines = async () => {
    const res = await fetch(
      `${config.public.baseUrl}/api/posts/${id}?locale=all&populate=*`
    );
    const resdata = await res.json();
    const data = resdata.data;

    // date formatting
    const dateString = data.attributes.createdAt;
    const dateObject = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    postDate.value = dateObject.toLocaleDateString("en-UK", options);

    // add ids to headlines
    document
      .getElementById("content")
      .querySelectorAll("h2,h3")
      .forEach(function (heading, i) {
        heading.setAttribute("id", i);
      });

    // parse rich text for headlines
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(
      data.attributes.content,
      "text/html"
    );
    articleTitles.value = parsedDocument.querySelectorAll("h2, h3");
  };
  getHeadlines();

  // highlight sidebar navi on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.intersectionRatio > 0) {
        currentSection.value = entry.target.getAttribute("id");
      }
    });
  });
  document.querySelectorAll("h2, h3").forEach((section) => {
    observer.observe(section);
  });
});
</script>
