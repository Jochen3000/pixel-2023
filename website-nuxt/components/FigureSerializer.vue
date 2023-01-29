<template>
  <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth">
    <div class="image-container">
      <SanityImage
        :asset-id="props.asset._ref"
        auto="format"
        :alt="props.alt"
      />
    </div>
    <figcaption>{{ props.caption }}</figcaption>
  </figure>
</template>

<script setup>
const props = defineProps(["asset", "caption", "alt"]);
</script>
