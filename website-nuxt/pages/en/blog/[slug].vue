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
          <PostSidebar :post="data" />
          <div id="content" class="content-right_blog">
            <div class="rich-text w-richtext">
              <SanityContent :blocks="data?.body" :serializers="serializers" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImageSerializer from "~~/components/ImageSerializer.vue";
import FigureSerializer from "~~/components/FigureSerializer.vue";

const postDate = ref("");

// fetch data
const { slug } = useRoute().params;
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  teaser,
  body,
  category,
  publishedAt,
  "imageUrl": image.asset->url
}`;
const { data } = useSanityQuery(query, {
  slug: slug,
});

// serialize image
const serializers = {
  types: {
    image: ImageSerializer,
    pictureTitled: FigureSerializer,
  },
};

// get pubDate with useAsyncData
async function getPubDate() {
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
getPubDate();

// custom js to generate sidebar toc
useHead({
  script: [
    {
      src: "/custom.js",
      body: true,
    },
  ],
});
</script>
