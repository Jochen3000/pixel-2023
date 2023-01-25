<template>
  <div class="strapline">blog</div>
  <h2 class="center">Latest articles</h2>
  <div class="collection-list-wrapper w-dyn-list">
    <div role="list" class="collection-list w-dyn-items">
      <div
        v-for="post in data?.slice(0, 1)"
        v-bind:key="post._id"
        role="listitem"
        class="collection-item w-dyn-item"
      >
        <NuxtLink
          :to="`/blog/${post.slug.current}`"
          class="teaserlinkblock w-inline-block"
        >
          <div
            data-w-id="f50e9285-f377-ea0d-a831-e479de4554a9"
            class="teaser-big"
          >
            <div class="teasertextblock">
              <div class="strapline">{{ post.category }}</div>
              <h3 class="headingteaser">{{ post.title }}</h3>
              <p class="postsummary">
                {{ post.teaser }}
              </p>
              <div class="div-block">
                <div class="teaser-text-link">Artikel lesen</div>
                <img
                  src="images/arrow-full-right.svg"
                  loading="lazy"
                  width="14"
                  height="14"
                  alt="arrow right"
                  class="arrowlink"
                />
              </div>
            </div>
            <div class="bigimagecontainer">
              <img
                height="495"
                loading="lazy"
                width="944"
                :src="post.imageUrl"
                alt=""
                class="bigteaserimage"
              />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="teaserblockcontainer">
    <div v-for="post in data.slice(1, 3)" class="smallteaser">
      <NuxtLink :to="`/blog/${post.slug.current}`">
        <div class="teaserheadline"></div>
        <h3 class="h3-small-teaser">
          {{ post.title }}
        </h3>
        <p class="para-teaser-small">
          {{ post.teaser }}
        </p>
        <div class="teaser-small-more">
          <div class="teaser-text-link">Read article</div>
          <img
            src="images/arrow-full-right.svg"
            loading="lazy"
            width="14"
            height="14"
            alt="arrow right"
            class="arrowlink"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const query = groq`*[_type == 'post']{
  title,
  teaser,
  category,
  slug,
  id,
  "imageUrl": image.asset->url
}`;
const { data } = useSanityQuery(query);
</script>
