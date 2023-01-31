<template>
  <h2>Blog</h2>
  <div v-for="post in posts.data">
    <NuxtLink :to="`/blog/${post.id}`">
      <h5>
        {{ post.attributes.title }}
      </h5>
      <img
        v-if="post.attributes.image.data"
        :src="config.public.baseUrl + post.attributes.image.data.attributes.url"
        loading="lazy"
        sizes="(max-width: 479px) 39vw, 160px"
        alt=""
        className="image"
      />
    </NuxtLink>
    <p>
      {{ post.attributes.teaser }}
    </p>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { data: posts } = await useFetch(
  `${config.public.baseUrl}/api/posts?locale=all&populate=*`
);
</script>
