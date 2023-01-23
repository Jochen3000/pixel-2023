<template>
  <div class="articlehead wf-section">
    <div class="containerinner blog">
      <div class="subtitle">{{ post?.category }}</div>
      <h1 class="center">{{ post?.title }}</h1>
      <p class="center">
        {{ post?.teaser }}
      </p>
      <div class="postmeta">
        <img
          src="/images/jochen-photo-bw-lighter.jpg"
          loading="lazy"
          alt="Author image"
          class="blogauthorimage"
        />
        <div class="postauthor">Jochen Ade</div>
        <div class="text-block-2">|</div>
        <div class="postdate">{{ postDate }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { post, postDate } = defineProps(["post", "postDate"]);
</script>
