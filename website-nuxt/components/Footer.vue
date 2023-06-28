<template>
  <div class="footer wf-section">
    <div class="sociallinks">
      <a
        href="https://www.linkedin.com/in/jochenade/"
        class="footersociallink darkblueshadow w-inline-block"
        ><img
          src="/images/linkedin-round.svg"
          loading="lazy"
          width="32"
          height="32"
          alt=""
      /></a>
      <a
        href="https://twitter.com/joetronico"
        class="footersociallink lightblueshadow w-inline-block"
        ><img
          src="/images/twitter-round.svg"
          loading="lazy"
          width="32"
          height="32"
          alt="Twitter"
      /></a>
      <a
        href="https://github.com/Jochen3000"
        class="footersociallink darkblueshadow w-inline-block"
        ><img
          src="/images/github-round.png"
          loading="lazy"
          width="32"
          height="32"
          alt="Github"
      /></a>
    </div>
    <div class="footermetablock">
      <div class="footerlinkblock">
        <div class="footerinfo">
          <NuxtLink to="/impressum" class="footerlink"> Impressum </NuxtLink>
           |
          <NuxtLink to="/datenschutzerklaerung" class="footerlink">
            Datenschutzerklärung
          </NuxtLink>
        </div>
      </div>
      <div class="footerinfoblock">
        <div class="footerinfo">
          Copyright © 2023 -
          <a href="#" class="footerinfo"
            >Powered by Webflow, Nuxt.js and Sanity</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
