<template>
  <div class="page-container w-container">
    <div class="articlehead wf-section">
      <div class="containerinner blog">
        <div class="subtitle">{{ post.data.attributes.description }}</div>
        <h1 class="center">{{ post.data.attributes.title }}</h1>
        <p class="center">
          {{ post.data.attributes.teaser }}
        </p>
        <div class="postmeta">
          <img
            src="/images/jochen-photo-bw-lighter.jpg"
            loading="lazy"
            alt="Author image"
            class="blogauthorimage"
          />
          <div class="postauthor">Jochen Ade</div>
          <div class="text-block-2">|</div>
          <div class="postdate">{{ post.data.attributes.createdAt }}</div>
        </div>
      </div>
    </div>
    <div class="contentsection wf-section">
      <div class="containerinner blog">
        <img
          v-if="post.data.attributes.image.data"
          :src="
            config.public.baseUrl +
            post.data.attributes.image.data.attributes.url
          "
          loading="lazy"
          :alt="post.data.attributes.title"
        />
        <div class="affiliatedisclosure">
          Hinweis: Wir verwenden manchmal Affiliate-Links, was bedeutet, dass
          wir möglicherweise eine Provision erhalten.
        </div>
      </div>
    </div>
    <div class="blogcontent">
      <div class="container">
        <div class="blog-grid">
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
              <div id="toc" class="toc"></div>
              <div class="hide---but-don-t-delete">
                <a href="#" class="tocitem">This is also a heading<br /></a
                ><a href="#" class="tocitem">This is a heading<br /></a>
              </div>
            </div>
          </div>
          <div id="content" class="content-right_blog">
            <div class="rich-text w-richtext">
              <div
                v-html="
                  post.data.attributes.content.replace(
                    /\/uploads/g,
                    config.public.baseUrl + '/uploads'
                  )
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- DATA SECTION -->
  <div></div>
</template>

<script setup>
const { id } = useRoute().params;
const config = useRuntimeConfig();

const { data: post } = await useFetch(
  `${config.public.baseUrl}/api/posts/${id}?locale=all&populate=*`
);

// generate sidebar toc
onMounted(() => {
  const nuxtApp = useNuxtApp();
  const blogNavi = nuxtApp.blogNavi;
  blogNavi();
});
</script>
