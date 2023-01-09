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
          <a href="/about" class="navi-link w..current">About</a>
          <NuxtLink to="/blog" class="navi-link">Blog</NuxtLink>
        </div>
        <div
          scroll="both"
          data-w-id="49f167b4-2cb9-d8a6-8b4b-64bc6f6110d8"
          class="burgermenu"
        >
          <NuxtLink to="/" class="navi-link w..current">DE</NuxtLink>
          <NuxtLink to="" class="navi-link">EN</NuxtLink>
        </div>
      </div>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>
