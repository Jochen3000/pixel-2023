<template>
  <div>
    <header>
      <div class="headerinner" v-if="$route.path.substring(0, 3) === '/en'">
        <div class="logo">
          <NuxtLink to="/en">
            <img src="/images/logo-pixel-berlin.svg" width="187" height="44" />
          </NuxtLink>
        </div>
        <div class="navidesktop">
          <NuxtLink to="/" class="navi-link"> DE </NuxtLink>
          <div class="current">EN</div>
        </div>
      </div>
      <div class="headerinner" v-else>
        <div class="logo">
          <NuxtLink to="/">
            <img src="/images/logo-pixel-berlin.svg" width="187" height="44" />
          </NuxtLink>
        </div>
        <div class="navidesktop">
          <div class="current">DE</div>
          <NuxtLink to="/en" class="navi-link"> EN </NuxtLink>
        </div>
      </div>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
// get locale
const route = useRoute();
</script>
