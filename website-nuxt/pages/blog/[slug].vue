<template>
  <div class="page-container w-container">
    <!-- <PostHeader :post="post" :postDate="postDate" /> -->
    <h2>{{ data?.title }}</h2>
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
const { slug } = useRoute().params;

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  teaser,
  category,
  "imageUrl": image.asset->url
}`;
const { data } = useSanityQuery(query, {
  slug: slug,
});
</script>
