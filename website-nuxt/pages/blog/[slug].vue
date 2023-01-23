<template>
  <div class="page-container w-container">
    <PostHeader :post="data" :postDate="postDate" />
    <div class="contentsection wf-section">
      <div class="containerinner blog">
        <img :src="data?.imageUrl" />
      </div>
    </div>
    <div class="blogcontent">
      <div class="container">
        <div class="blog-grid">
          <!-- <PostSidebar
            :articleTitles="articleTitles"
            :currentSection="currentSection"
            :post="post"
          /> -->
          <!-- post body -->
          <!-- <div id="content" class="content-right_blog">
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const postDate = ref("");
const currentSection = ref("");
const articleTitles = ref("");

const { slug } = useRoute().params;
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  teaser,
  category,
  publishedAt,
  "imageUrl": image.asset->url
}`;
const { data } = useSanityQuery(query, {
  slug: slug,
});

// another request for date with usesyncdata
async function getData() {
  const sanity = useSanity();
  const { data } = await useAsyncData("post", () =>
    sanity.fetch(query, {
      slug: slug,
    })
  );
  const dateString = data.value.publishedAt;
  const dateObject = new Date(dateString);
  const options = { month: "long", day: "numeric", year: "numeric" };
  postDate.value = dateObject.toLocaleDateString("en-UK", options);
}
getData();

// DAS ALTE STRAPI SCRIPT

// onMounted(() => {
//   // fetch additional data
//   const getHeadlines = async () => {
//     const res = await fetch(URL);
//     const resdata = await res.json();
//     const data = resdata.data;
//     console.log(data);
// // date formatting
// const dateString = data.value.publishedAt;
// const dateObject = new Date(dateString);
// const options = { month: "long", day: "numeric", year: "numeric" };
// postDate.value = dateObject.toLocaleDateString("en-UK", options);
// // add ids to headlines
// document
//   .getElementById("content")
//   .querySelectorAll("h2,h3")
//   .forEach(function (heading, i) {
//     heading.setAttribute("id", i);
//   });
// // parse rich text for headlines
// const parser = new DOMParser();
// const parsedDocument = parser.parseFromString(
//   data.attributes.content,
//   "text/html"
// );
// articleTitles.value = parsedDocument.querySelectorAll("h2, h3");
//   };
//   getHeadlines();

//   // highlight sidebar navi on scroll
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const id = entry.target.getAttribute("id");
//       if (entry.intersectionRatio > 0) {
//         currentSection.value = entry.target.getAttribute("id");
//       }
//     });
//   });
//   document.querySelectorAll("h2, h3").forEach((section) => {
//     observer.observe(section);
//   });
// });
</script>
