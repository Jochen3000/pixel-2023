<template>
  <SanityImage :asset-id="props.asset._ref" auto="format" />
</template>

<script setup>
const props = defineProps(["asset"]);
</script>
