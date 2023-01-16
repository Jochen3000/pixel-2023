<template>
  <div>
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
// get path

// const fullPath = useRoute().path;
// const firstLevelPath = fullPath.substring(1, 5);
// const onBlogPage = ref(false);

// onBlogPage.value = firstLevelPath === "blog";
</script>
