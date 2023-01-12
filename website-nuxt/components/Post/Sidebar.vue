<template>
  <div class="content-left">
    <div class="stick-wrapper">
      <div class="social-row">
        <div class="share-button">
          <img
            src="/images/facebook.svg"
            loading="lazy"
            alt=""
            class="social-share-icon"
          />
          <div class="social-share-code w-embed">
            <!-- <a
              class="w-inline-block social-share-code"
              href="https://www.facebook.com/sharer/sharer.php?u=&amp;t="
              title="Share on Facebook"
              target="_blank"
              onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&amp;t=' + encodeURIComponent(document.URL), 'targetWindow', 'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); 
return false;"
            ></a> -->
          </div>
        </div>
        <div class="share-button">
          <img
            src="/images/linkedin.svg"
            loading="lazy"
            alt=""
            class="social-share-icon"
          />
          <div class="social-share-code w-embed">
            <a
              class="w-inline-block social-share-code"
              href="http://www.linkedin.com/shareArticle?mini=true&amp;url=&amp;title=&amp;summary=&amp;source="
              target="_blank"
              title="Share on LinkedIn"
              onclick="window.open('http://www.linkedin.com/shareArticle?mini=true&amp;url=' + encodeURIComponent(document.URL) + '&amp;t=' + encodeURIComponent(document.URL), 'targetWindow', 'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=600'); return false;"
            >
            </a>
          </div>
        </div>
        <div class="share-button">
          <img
            src="/images/twitter.svg"
            loading="lazy"
            alt=""
            class="social-share-icon"
          />
          <div class="social-share-code w-embed">
            <!-- <a
              class="w-inline-block social-share-code"
              href="https://twitter.com/intent/tweet?"
              target="_blank"
              alt="Tweet This"
              title="Tweet"
              onclick="window.open('https://twitter.com/intent/tweet?text=%20Check this out! ' + encodeURIComponent(document.URL) + '&amp;t=' + encodeURIComponent(document.URL), 'targetWindow', 'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;"
            ></a> -->
          </div>
        </div>
      </div>
      <div id="toc" class="toc">
        <div v-for="(title, index) in articleTitles">
          <a
            :href="`#${index}`"
            class="tocitem"
            :class="{ active: index == currentSection }"
          >
            {{ title.innerHTML }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { articleTitles, currentSection } = defineProps([
  "articleTitles",
  "currentSection",
]);
</script>
