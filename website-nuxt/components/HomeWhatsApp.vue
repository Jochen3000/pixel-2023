<template>
  <div class="contact-block">
    <div class="strapline" v-if="$route.path === '/en'">contact</div>
    <div class="strapline" v-else>Kontakt</div>
    <h2 class="center" v-if="$route.path === '/en'">Get in touch</h2>
    <h2 class="center" v-else>Kontakt aufnehmen</h2>
    <div class="contacts-block-container">
      <div class="about" v-if="$route.path === '/en'">
        <p>
          👋 Hello, I&#x27;m Jochen Ade<br />👀 I develop prototypes, digital
          products and web applications. <br />🌱 I use different technologies
          like React, Next.js and tools like Figma and Webflow.<br />💞️ I would
          be happy to speak about your project or idea.<br />📫 Please use my
          chat application to get in touch 👉
        </p>
      </div>
      <div class="about" v-else>
        <p>
          👋 Hallo, ich bin Jochen Ade 👀 Ich entwickle Prototypen, Websites und
          Apps. 🌱 Dabei nutze ich unterschiedliche Technologien wie React,
          Vue.js, Python und Tools wie Figma, Wordpress und Webflow. 💞️ Über
          eine Kontaktaufnahme würde ich mich freuen! 📫 Bitte meine Chat
          Applikation benutzen 👉
        </p>
      </div>
      <div class="whatsapp-container">
        <div class="whatsapp-inner">
          <div class="phone-top">
            <div class="time">
              <div class="time-display">{{ currentTime() }}</div>
            </div>
            <div class="signal-battery">
              <img
                src="/images/phone-battery-status.svg"
                loading="lazy"
                alt=""
                class="phone-status-img"
              />
            </div>
          </div>
          <div class="whatsapp-top">
            <div class="profile-img">
              <img
                src="/images/jochen-profile-rund-2x.png"
                loading="lazy"
                alt="profile image"
                height="36"
                class="profile-image"
              />
            </div>
            <div class="name-contact">
              <div class="profile-name">Jochen</div>
              <div class="contact-tap">is typing...</div>
            </div>
          </div>
          <div class="chat-container">
            <div class="chat-container-inner">
              <div class="date-time">
                <div class="date-time-info">Today</div>
              </div>
              <div class="message-computer">
                <div class="message-comp-inner">
                  <div class="message-container-incoming appear">
                    <div
                      class="message-incoming-content"
                      v-if="$route.path === '/en'"
                    >
                      Hi 👋 are you interested in a collaboration?
                    </div>
                    <div class="message-incoming-content" v-else>
                      Hi 👋 hast Du Interesse an einer Zusammenarbeit?
                    </div>
                    <div class="message-time">{{ currentTime() }}</div>
                  </div>
                  <div class="arrow-container-user">
                    <img
                      src="/images/speech-shadow-left.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-shadow-user"
                    /><img
                      src="/images/speech-left.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-img-user"
                    />
                  </div>
                </div>
              </div>
              <div class="message-computer">
                <div class="message-comp-inner">
                  <div class="message-container-incoming">
                    <div
                      class="message-incoming-content"
                      v-if="$route.path === '/en'"
                    >
                      What is your name?
                    </div>
                    <div class="message-incoming-content" v-else>
                      Wie heisst Du?
                    </div>
                    <div class="message-time">{{ currentTime() }}</div>
                  </div>
                  <div class="arrow-container-user">
                    <img
                      src="/images/speech-shadow-left.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-shadow-user"
                    /><img
                      src="/images/speech-left.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-img-user"
                    />
                  </div>
                </div>
              </div>
              <div class="message-user">
                <div class="message-container">
                  <div class="message-container-inner">
                    <div class="message-content">text-entry-name</div>
                    <div class="message-time-status">
                      <div class="message-time">{{ currentTime() }}</div>
                      <img
                        src="/images/whatsapp-message-ok.svg"
                        loading="lazy"
                        alt=""
                        class="message-status"
                      />
                    </div>
                  </div>
                  <div class="arrow-container">
                    <img
                      src="/images/speech-shadow.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-shadow"
                    /><img
                      src="/images/speech-bar-green.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-img"
                    />
                  </div>
                </div>
              </div>
              <div class="message-computer">
                <div class="message-comp-inner">
                  <div class="message-container-incoming">
                    <div
                      class="message-incoming-content"
                      v-if="$route.path === '/en'"
                    >
                      How can I help?
                    </div>
                    <div class="message-incoming-content" v-else>
                      Wie kann ich helfen?
                    </div>
                    <div class="message-time">{{ currentTime() }}</div>
                  </div>
                  <div class="arrow-container-user">
                    <img
                      src="/images/speech-shadow-left.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-shadow-user"
                    /><img
                      src="/images/speech-left.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-img-user"
                    />
                  </div>
                </div>
              </div>
              <div class="message-user">
                <div class="message-container">
                  <div class="message-container-inner">
                    <div class="message-content">text-entry-message</div>
                    <div class="message-time-status">
                      <div class="message-time">{{ currentTime() }}</div>
                      <img
                        src="/images/whatsapp-message-ok.svg"
                        loading="lazy"
                        alt=""
                        class="message-status"
                      />
                    </div>
                  </div>
                  <div class="arrow-container">
                    <img
                      src="/images/speech-shadow.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-shadow"
                    /><img
                      src="/images/speech-bar-green.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-img"
                    />
                  </div>
                </div>
              </div>
              <div class="message-computer">
                <div class="message-comp-inner">
                  <div class="message-container-incoming">
                    <div
                      class="message-incoming-content"
                      v-if="$route.path === '/en'"
                    >
                      Cool 🙂 How can I reach you?
                    </div>
                    <div class="message-incoming-content" v-else>
                      Cool 🙂 Wie kann ich Dich erreichen?
                    </div>
                    <div class="message-time">{{ currentTime() }}</div>
                  </div>
                  <div class="arrow-container-user">
                    <img
                      src="/images/speech-shadow-left.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-shadow-user"
                    /><img
                      src="/images/speech-left.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-img-user"
                    />
                  </div>
                </div>
              </div>
              <div class="message-user">
                <div class="message-container">
                  <div class="message-container-inner">
                    <div class="message-content">text-entry-contact</div>
                    <div class="message-time-status">
                      <div class="message-time">{{ currentTime() }}</div>
                      <img
                        src="/images/whatsapp-message-ok.svg"
                        loading="lazy"
                        alt=""
                        class="message-status"
                      />
                    </div>
                  </div>
                  <div class="arrow-container">
                    <img
                      src="/images/speech-shadow.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-shadow"
                    /><img
                      src="/images/speech-bar-green.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-img"
                    />
                  </div>
                </div>
              </div>
              <div class="message-computer">
                <div class="message-comp-inner">
                  <div class="message-container-incoming">
                    <div
                      class="message-incoming-content"
                      v-if="$route.path === '/en'"
                    >
                      Thanks, I'll get in touch!
                    </div>
                    <div class="message-incoming-content" v-else>
                      Danke ich melde mich!
                    </div>
                    <div class="message-time">{{ currentTime() }}</div>
                  </div>
                  <div class="arrow-container-user">
                    <img
                      src="/images/speech-shadow-left.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-shadow-user"
                    /><img
                      src="/images/speech-left.svg"
                      loading="lazy"
                      alt=""
                      class="arrow-img-user"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- netlify form -->
          <div class="whatsapp-bottom">
            <div class="message-box">
              <div class="form-block w-form">
                <form
                  name="contact-de"
                  method="POST"
                  data-netlify="true"
                  class="whatsapp-form"
                >
                  <div class="message-send">
                    <input
                      type="text"
                      class="text-entry-name w-input"
                      maxlength="200"
                      name="Name"
                      data-name="Name"
                      placeholder=""
                      id="name"
                      required=""
                    /><input
                      type="text"
                      class="text-entry-message w-input"
                      maxlength="200"
                      name="message"
                      data-name="message"
                      placeholder=""
                      id="message-2"
                      required=""
                    /><input
                      type="text"
                      class="text-entry-contact w-input"
                      maxlength="200"
                      name="contact"
                      data-name="contact"
                      placeholder=""
                      id="contact-2"
                      required=""
                    /><img
                      alt="whatsapp submit button"
                      width="24"
                      height="24"
                      src="/images/button-whatsapp.svg"
                      loading="lazy"
                      class="submit-arrow-button"
                    />
                  </div>
                  <input
                    type="submit"
                    data-wait=""
                    value="submit"
                    class="submit-button w-button"
                  />
                </form>
                <div class="success-message w-form-done">
                  <div class="submit-success-message">ok</div>
                </div>
                <div class="w-form-fail">
                  <div>error</div>
                </div>
              </div>
            </div>
            <div class="wipeup-container">
              <div class="swipe-up"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

/* display time */
function currentTime() {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let minutesString = minutes <= 9 ? `0${minutes}` : `${minutes}`;
  return `${hours}:${minutesString}`;
}

onMounted(() => {
  const nuxtApp = useNuxtApp();
  const whatsApp = nuxtApp.whatsApp;
  whatsApp();
});
</script>
