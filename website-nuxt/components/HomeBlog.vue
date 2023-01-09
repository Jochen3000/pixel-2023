<template>
  <div class="strapline">blog</div>
  <h2 class="center">Latest articles</h2>
  <div class="collection-list-wrapper w-dyn-list">
    <div role="list" class="collection-list w-dyn-items">
      <div
        v-for="post in posts.data.slice(0, 1)"
        role="listitem"
        class="collection-item w-dyn-item"
      >
        <NuxtLink
          :to="`/blog/${post.id}`"
          class="teaserlinkblock w-inline-block"
        >
          <div
            data-w-id="f50e9285-f377-ea0d-a831-e479de4554a9"
            class="teaser-big"
          >
            <div
              class="teasertextblock"
              style="
                transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
            >
              <div class="strapline">{{ post.attributes.description }}</div>
              <h3 class="headingteaser">{{ post.attributes.title }}</h3>
              <p class="postsummary">
                {{ post.attributes.teaser }}
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
                  style="
                    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                />
              </div>
            </div>
            <div class="bigimagecontainer">
              <img
                height="495"
                loading="lazy"
                width="944"
                src="/images/teaser-mvp.svg"
                alt=""
                class="bigteaserimage"
                style="
                  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                  transform-style: preserve-3d;
                "
              />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="teaserblockcontainer">
    <div v-for="post in posts.data.slice(1, 3)" class="smallteaser">
      <NuxtLink :to="`/blog/${post.id}`">
        <div class="teaserheadline"></div>
        <h3 class="h3-small-teaser">
          {{ post.attributes.title }}
        </h3>
        <p class="para-teaser-small">
          {{ post.attributes.teaser }}
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

const { data: posts } = await useFetch(
  `${config.public.baseUrl}/api/posts?locale=all&populate=*&sort=createdAt%3Adesc`
);
</script>
