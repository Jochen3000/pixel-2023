<template>
  <div class="stage wf-section">
    <div class="herotext">
      <h1 class="heading-2">
        pixel.berlin<br />web development.<br />frontend &amp; prototypes.
      </h1>

      <p class="paragraph" v-if="$route.path === '/en'">
        Crafting prototypes, websites and apps. Moving from idea to product with
        a focus on user experience.
      </p>
      <p class="paragraph" v-else>
        Die pixel.berlin Werkstatt für Web-Entwicklung ist die richtige
        Anlaufstelle für professionelle Anwendungen, bei denen das
        Benutzererlebnis immer im Vordergrund steht.
      </p>

      <div class="logocontainer">
        <img
          src="/images/css.svg"
          loading="lazy"
          width="39"
          height="39"
          alt="Logo Python"
          class="toollogo"
        /><img
          src="/images/js.svg"
          loading="lazy"
          width="39"
          height="39"
          alt="Logo JS"
          id="w-node-ea48d21a-38a2-6012-7816-a397ee901b9b-8bb3785f"
          class="toollogo"
        /><img
          src="/images/webflow-icon.svg"
          loading="lazy"
          width="39"
          height="39"
          alt="Logo Webflow"
          class="toollogo"
        /><img
          src="/images/python_icon.svg"
          loading="lazy"
          width="45"
          height="36"
          alt="Logo Python"
          class="toollogo"
        /><img
          src="/images/react.svg"
          loading="lazy"
          width="21"
          height="41"
          alt="Logo React"
          class="toollogo"
        /><img
          src="/images/vuejs.svg"
          loading="lazy"
          width="36"
          height="39"
          alt="Logo Vue.js"
          class="toollogo"
        />
      </div>
    </div>
    <div class="cube-animation">
      <div class="w-embed">
        <section class="environment">
          <div class="cube animated">
            <div class="front"></div>
            <div class="top"></div>
            <div class="bottom"></div>
            <div class="left"></div>
            <div class="right"></div>
            <div class="back"></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
