<template>
  <div>
    <header>
      <div class="headerinner">
        <div class="logo">
          <NuxtLink to="/">
            <img src="/images/logo-pixel-berlin.svg" width="187" height="44" />
          </NuxtLink>
        </div>
        <div class="navidesktop">
          <NuxtLink to="/" class="navi-link w..current">DE</NuxtLink>
          <NuxtLink to="/en" class="navi-link">EN</NuxtLink>
        </div>
      </div>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>
