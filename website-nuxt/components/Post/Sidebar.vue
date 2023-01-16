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
            <a
              class="w-inline-block social-share-code"
              :href="`https://www.facebook.com/share.php?u=${sharingLink}`"
              title="Share on Facebook"
              target="_blank"
            ></a>
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
              :href="`https://www.linkedin.com/sharing/share-offsite/?url=${sharingLink}`"
              target="_blank"
              title="Share on LinkedIn"
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
            <a
              class="w-inline-block social-share-code"
              :href="`http://twitter.com/share?&url=${sharingLink}&text=${sharingTitle}`"
              target="_blank"
              alt="Tweet This"
              title="Tweet"
            ></a>
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
            <!-- remove &amp; from html and render title -->
            {{ title.innerHTML.replace(/amp;/g, "") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const sharingLink = ref("");
const sharingTitle = ref("");

// get environment variable
const config = useRuntimeConfig();
const myBaseUrl = config.public.baseUrl;

// get path
const myPath = useRoute().fullPath;

// get props
const { articleTitles, currentSection, post } = defineProps([
  "articleTitles",
  "currentSection",
  "post",
]);

// social sharing links
sharingLink.value = myBaseUrl + myPath;
sharingTitle.value = encodeURIComponent(post.data.attributes.title);
</script>
