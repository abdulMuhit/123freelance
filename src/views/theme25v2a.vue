<template>
  <v-card id="theme25">
    <v-card-title class="header">
   <!--    <vue-particles
        class="partikel"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="0"
        :lineLinked="false"
        :lineOpacity="0.1"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles> -->
      <div class="mysection">
        <div class="sec_a">
          <div class="wrap-inside" :style="{'background-image': 'url(/img/foto_p1.png)'}"></div>
        </div>
        <div class="sec_b">
          <h1 class="name">Beverly Andrews</h1>
          <p class="title">User interface designer</p>
        </div>
        <div class="sec_c">
          <v-btn color="blue-grey" class="ma-2 white--text">
            <v-icon left dark>mdi-email-outline</v-icon>Message
          </v-btn>
          <v-btn color="blue-grey" class="ma-2 white--text">Download PDF</v-btn>
        </div>
        <div class="sec_d">
          <div class="sec_d1">
            <div class="meditem" :style="{'background-image': 'url(/img/icons/icon_loc.svg)'}"></div>
            <div class="meditem" :style="{'background-image': 'url(/img/icons/icon_gplus.svg)'}"></div>
            <div class="meditem" :style="{'background-image': 'url(/img/icons/icon_linked.svg)'}"></div>
          </div>
          <div class="sec_d2">
            <div class="meditem" :style="{'background-image': 'url(/img/icons/icon_wa.svg)'}"></div>
            <div class="meditem" :style="{'background-image': 'url(/img/icons/icon_be.svg)'}"></div>
            <div class="meditem" :style="{'background-image': 'url(/img/icons/icon_dribble.svg)'}"></div>
          </div>
        </div>

        <div class="sec_e">
          <div class="sec_e1">
            <div class="sec_e11">
              <h3>Hourly Rate</h3>
              <p>$ 25 USD</p>
            </div>

            <div class="sec_e12">
              <h3>Available for</h3>
              <p>8 hours</p>
            </div>
          </div>

          <div class="sec_e2">
            <v-btn>Hire Me</v-btn>
          </div>
        </div>
      </div>
    </v-card-title>
    <nav class="nav">
      <ul class="custom-tab">
        <li>
          <router-link
            to="/theme25v2a/about"
            :class="[currentPage.includes('about') ? '' : 'navtext' ]"
          >About</router-link>
        </li>
        <li>
          <router-link
            to="/theme25v2a/porto"
            :class="[currentPage.includes('porto') ? '' : 'navtext' ]"
          >Portfolio</router-link>
        </li>
        <li>
          <router-link
            to="/theme25v2a/work"
            :class="[currentPage.includes('work') ? '' : 'navtext' ]"
          >Work</router-link>
        </li>
        <li>
          <router-link
            to="/theme25v2a/edu"
            :class="[currentPage.includes('edu') ? '' : 'navtext' ]"
          >Education</router-link>
        </li>
        <li>
          <router-link
            to="/theme25v2a/skills"
            :class="[currentPage.includes('skills') ? '' : 'navtext' ]"
          >Skills</router-link>
        </li>
      </ul>
    </nav>

    <div>
      <router-view></router-view>
    </div>

    <!-- 
    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      <v-tabs-slider color="rgba(0, 0, 0, 0.87)"></v-tabs-slider>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="body-container">
              <h2 class="about-t">About</h2>
              <p class="about-p">
                I'm Conor, I'm a product manager from London. I'm currently looking for new permanent job opportunities within London area that will allow my career to develop...
                I'm Conor, I'm a product manager from London. I'm currently looking for new permanent job opportunities within London area that will allow my career to develop...
                I'm Conor, I'm a product manager from London. I'm currently looking for new permanent job opportunities within London area that will allow my career to develop...
                I'm Conor, I'm a product manager from London. I'm currently looking for new permanent job opportunities within London area that will allow my career to develop...
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="body-container">
              <div class="images-portfolio">
                <div class="image-p">
                  <img src="/img/insta1.png" alt="porto1" class="image" />
                </div>
                <div class="image-p">
                  <img src="/img/insta2.png" alt="porto2" class="image" />
                </div>
                <div class="image-p">
                  <img src="/img/insta3.png" alt="porto3" class="image" />
                </div>
                <div class="image-p">
                  <img src="/img/mobilebandros.png" alt="porto1" class="image" />
                </div>
                <div class="image-p">
                  <img src="/img/webviewbandros.png" alt="porto2" class="image" />
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="body-container">
              <div class="resume-section-content">
                <div class="resume-timeline position-relative"></div>
            
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="body-container">
              <section class="resume-section education-section mb-5">
                <div class="resume-section-content"></div>
              </section>
            
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="body-container">
              <div class="resume-section-content resume-section-content-c">
               
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    -->
  </v-card>
</template>

<script>
export default {
  name: "theme25",
  computed: {
    currentPage() {
      return this.$route.path;
    }
  },
  data: () => ({
    tab: null,
    items: ["About", "Portfolio", "Work", "Education", "Skills"]
  })
};
</script>

<style lang="scss" scoped>

.custom-tab {
  z-index: 2;
}

.activeme {
  background-color: red;
}
@font-face {
  font-family: "Semplicita";
  src: url(~@/assets/fonts/Semplicita_Medium.otf) format("otf");
}

/*
.navtext {
  text-shadow:
     3px  3px 0 #000,
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
}
*/

@supports (-webkit-text-stroke: 1px rgba(106, 162, 247, 0.4)) {
  .navtext {
    -webkit-text-stroke: 1px rgba(106, 162, 247, 0.4);
    -webkit-text-fill-color: white;
  }
}

/*
@font-face {
  font-family: 'ratio';
  src: url('../assets/fonts/ratio.woff2') format('woff2'),
       url('../assets/fonts/ratio.woff') format('woff'),
       url('../assets/fonts/ratio.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
*/

/* router-link-exact-active router-link-active
 */

/* .router-link-active {
  color: black;
} */

#theme25 {
  font-family: "Semplicita";
}

.partikel {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
}

.v-tab {
  text-transform: none;
}

@media (min-width: 320px) {
}

@media (min-width: 360px) {
}

@media (min-width: 767px) {
}

@media (min-width: 1024px) {
  .mysection {
    display: grid;
    grid-template-areas:
      "propic protext mainmedsos"
      "propic action .";
    grid-template-rows: 150px;
    grid-template-columns: 1fr 1.5fr 3fr;
    align-items: center;
    width: 100%;
    .sec_a {
      grid-area: propic;

      width: 100%;
      height: 100%;
      justify-self: center;
      align-self: center;
      display: flex;

      .wrap-inside {
        flex: 1 1 1;
        justify-content: center;
        justify-items: center;
        margin: auto;
        width: 128px;
        height: 128px;

        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }
    }

    .sec_b {
      grid-area: protext;
      background-color: azure;
      align-self: flex-start;

      .name {
        font-size: 48px;
        font-weight: 600;
        line-height: 56px;
      }

      .title {
        font-size: 30px;
        line-height: 35px;
        color: #515151;
      }
    }

    .sec_c {
      grid-area: action;
      background-color: red;
      place-self: start start;
    }

    .sec_d {
      grid-area: mainmedsos;
      background-color: aqua;
      display: flex;
      align-self: flex-start;

      .sec_d1 {
        flex: 1 1 auto;
        display: flex;
        .meditem {
          display: block;
          width: 43px;
          height: 43px;
          background-color: #edeff2;
          border-radius: 50%;
          background-position: center center;
          margin-right: 5px;
          background-size: 20px;

          &:hover {
            transform: scale(1.05, 1.05);
            cursor: pointer;
          }

          &:active {
            transform: scale(0.95, 0.95);
          }
        }
      }

      .sec_d2 {
        flex: 1 1 auto;
        display: flex;
        justify-content: flex-end;
        .meditem {
          flex: 1 1 1;
          display: block;
          width: 43px;
          height: 43px;
          background-color: #edeff2;
          border-radius: 50%;
          background-position: center center;
          margin-right: 5px;
          background-size: 20px;

          &:hover {
            transform: scale(1.05, 1.05);
            cursor: pointer;
          }

          &:active {
            transform: scale(0.95, 0.95);
          }
        }
      }
    }

    .sec_e {
      display: flex;
      flex-direction: column;

      .sec_e1 {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
      }

      .sec_e2 {
        display: flex;
        justify-items: center;
        justify-content: center;
      }
    }
  }

  ul {
    font-size: 48px;
    line-height: 56px;
    color: #6aa2f6;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    li {
      color: #6aa2f6;
      list-style: none;
      flex: 1 1 1;
      a {
        text-decoration: none;
      }
    }
  }

  .about-t {
    margin-top: 31px;
    text-align: center;
  }

  .about-p {
    margin-top: 32px;
    text-align: justify;
  }
}
</style>
