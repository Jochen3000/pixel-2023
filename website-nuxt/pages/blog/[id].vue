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
          <div class="postdate">{{ postDate }}</div>
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
              <!-- development -->
              <h3>{{ currentSection }}</h3>

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
const currentSection = ref("");
const postDate = ref("");
const articleTitles = ref("");

const { data: post } = await useFetch(
  `${config.public.baseUrl}/api/posts/${id}?locale=all&populate=*`
);

onMounted(() => {
  const getHeadlines = async () => {
    const res = await fetch(
      `${config.public.baseUrl}/api/posts/${id}?locale=all&populate=*`
    );
    const resdata = await res.json();
    const data = resdata.data;

    // date formatting
    const dateString = data.attributes.createdAt;
    const dateObject = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    postDate.value = dateObject.toLocaleDateString("en-UK", options);

    // parse rich text for headlines
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(
      data.attributes.content,
      "text/html"
    );
    articleTitles.value = parsedDocument.querySelectorAll("h2, h3");
    console.log("hallo", articleTitles.value);
  };
  getHeadlines();
});

// generate sidebar toc
onMounted(() => {
  const nuxtApp = useNuxtApp();
  const blogNavi = nuxtApp.blogNavi;
  blogNavi();

  // highlight sidebar navi on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.intersectionRatio > 0) {
        currentSection.value = entry.target.getAttribute("id");
      }
    });
  });
  document.querySelectorAll("h2, h3").forEach((section) => {
    observer.observe(section);
  });
});
</script>
