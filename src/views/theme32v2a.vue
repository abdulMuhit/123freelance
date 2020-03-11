<template>
  <v-card>
    <v-card-title class="header">
      <div class="profile showonweb">
        <div class="wrap-inside" :style="{'background-image': 'url(/img/foto_p1.jpeg)'}"></div>

        <div class="wrap-text">
          <h1 class="name">Abdul Muhit T.</h1>
          <p class="title">Web developer</p>
        </div>

        <div class="medsos-main-1">
          <div class="medsos-1">
            <div class="meditem" :style="{'background-image': 'url(/img/icons/icon_loc.svg)'}"></div>
            <div class="meditem" :style="{'background-image': 'url(/img/icons/icon_gplus.svg)'}"></div>
            <div class="meditem" :style="{'background-image': 'url(/img/icons/icon_linked.svg)'}"></div>
          </div>

          <div class="medsos-2">
            <div class="meditem" :style="{'background-image': 'url(/img/icons/icon_wa.svg)'}"></div>
            <div class="meditem" :style="{'background-image': 'url(/img/icons/icon_be.svg)'}"></div>
            <div class="meditem" :style="{'background-image': 'url(/img/icons/icon_dribble.svg)'}"></div>
          </div>
        </div>
      </div>
    </v-card-title>
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
              <p
                class="about-p"
              >A Fullstack JavaScript developer, using vue, nuxt, express.js (node.js), with more than 2 years experience.</p>
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
                <div class="resume-timeline position-relative">
                  <article class="resume-timeline-item position-relative pb-5">
                    <div class="resume-timeline-item-header mb-2">
                      <div class="d-flex flex-column flex-md-row">
                        <h3 class="resume-position-title font-weight-bold mb-1">
                          Freelance Web
                          Developer
                        </h3>
                        <div class="resume-company-name ml-auto">
                          <ul>
                            <li>
                              <a
                                href="https://insta-nuxt-clone.herokuapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Sample Project
                                Insta Store
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://www.tizenstore.com/main/getDetail.as?Id=hmAptON8fe"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Sample Project
                                Kang Parkir
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!--//row-->
                      <div class="resume-position-time">March 2020 - now</div>
                    </div>

                    <!--//resume-timeline-item-header-->
                    <div class="resume-timeline-item-desc">
                      <p>Build some webapp Project</p>
                      <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                      <p class="h6">
                        1.
                        <strong>Mockup Insta Store</strong>
                      </p>
                      <ul>
                        <li>Adding responsive web page</li>
                        <li>Adding PWA technology.</li>
                      </ul>
                      <p class="h6">
                        2.
                        <strong>Tizen Store Kang Parkir</strong>
                      </p>
                      <br />

                      <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                        Technologies
                        used:
                      </h4>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Vue</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Nuxt</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">
                            Node.js
                            (express.js)
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">socket.io</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">HTML/SASS</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">mongo db</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">PostgreSql</span>
                        </li>
                      </ul>
                    </div>
                    <!--//resume-timeline-item-desc-->
                  </article>
                  <article class="resume-timeline-item position-relative pb-5">
                    <div class="resume-timeline-item-header mb-2">
                      <div class="d-flex flex-column flex-md-row">
                        <h3 class="resume-position-title font-weight-bold mb-1">
                          Front End Web
                          Developer
                        </h3>
                        <div class="resume-company-name ml-auto">
                          <ul>
                            <li>
                              <a
                                href="https://m.bandros.co.id"
                                target="_blank"
                                rel="noopener noreferrer"
                              >m.bandros.co.id</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!--//row-->
                      <div class="resume-position-time">February 2018 - February 2020</div>
                    </div>

                    <!--//resume-timeline-item-header-->
                    <div class="resume-timeline-item-desc">
                      <p>Built some dropship e-commerce webapp for member of bandros.co.id.</p>
                      <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                      <p>Rebuilt front web page from bandros ver 3 to bandros ver 4.0.0</p>
                      <ul>
                        <li>Adding responsive web page</li>
                        <li>Adding PWA technology.</li>
                        <li>Using socket.IO for realtime discussion feature.</li>
                      </ul>
                      <br />
                      <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                        Technologies
                        used:
                      </h4>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Vue</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Nuxt</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Node.js</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">socket.io</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">HTML/SASS</span>
                        </li>
                      </ul>
                    </div>
                    <!--//resume-timeline-item-desc-->
                  </article>
                  <!--//resume-timeline-item-->
                  <article class="resume-timeline-item position-relative pb-5">
                    <div class="resume-timeline-item-header mb-2">
                      <div class="d-flex flex-column flex-md-row">
                        <h3 class="resume-position-title font-weight-bold mb-1">
                          Freelancer
                          Web
                          Developer
                        </h3>
                        <div class="resume-company-name ml-auto">
                          <ul>
                            <li>
                              <a
                                href="https://www.assemblrworld.com"
                                target="_blank"
                                rel="noopener noreferrer"
                              >https://www.assemblrworld.com</a>
                            </li>
                            <li>
                              <a
                                href="https://tender-bhaskara-2bc85d.netlify.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Sample Project
                                webapp assemblr
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!--//row-->
                      <div class="resume-position-time">November 2019 - Desember 2019</div>
                    </div>
                    <!--//resume-timeline-item-header-->
                    <div class="resume-timeline-item-desc">
                      <p>
                        Handle some minor change in the app, with some webview technology that
                        embed to android / ios app.
                      </p>
                      <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>

                      <ul>
                        <li>Adding some books page</li>
                        <li>Adding some view page fix</li>
                        <li>Adding some bugs fix</li>
                      </ul>
                      <br />
                      <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                        Technologies
                        used:
                      </h4>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Vue</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Firebase</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">HTML/SASS</span>
                        </li>
                      </ul>
                    </div>
                    <!--//resume-timeline-item-desc-->
                  </article>
                  <!--//resume-timeline-item-->

                  <article class="resume-timeline-item position-relative pb-5">
                    <div class="resume-timeline-item-header mb-2">
                      <div class="d-flex flex-column flex-md-row">
                        <h3 class="resume-position-title font-weight-bold mb-1">
                          Android
                          Developer
                        </h3>
                        <div class="resume-company-name ml-auto">
                          <a
                            href="https://play.google.com/store/apps/details?id=com.bandros&hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            bandros Android
                            App
                          </a>
                        </div>
                      </div>
                      <!--//row-->
                      <div class="resume-position-time">February 2018 - Mei 2018</div>
                    </div>
                    <!--//resume-timeline-item-header-->
                    <div class="resume-timeline-item-desc">
                      <p>Responsible to maintenance and fixing some bugs in bandros android app.</p>
                      <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>

                      <ul>
                        <li>Adding some bandros video education page</li>
                        <li>Make some view pages fix</li>
                        <li>Make some bugs fix</li>
                      </ul>
                      <br />
                      <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                        Technologies
                        used:
                      </h4>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Java</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Sqlite</span>
                        </li>
                      </ul>
                    </div>
                    <!--//resume-timeline-item-desc-->
                  </article>
                  <!--//resume-timeline-item-->

                  <article class="resume-timeline-item position-relative">
                    <div class="resume-timeline-item-header mb-2">
                      <div class="d-flex flex-column flex-md-row">
                        <h3 class="resume-position-title font-weight-bold mb-1">
                          Learning &
                          Challenge Hunter
                        </h3>

                        <div class="resume-company-name ml-auto">
                          <a
                            href="https://www.dicoding.com/users/2128"
                            target="_blank"
                            rel="noopener noreferrer"
                          >dicoding.com</a>
                        </div>
                      </div>
                      <!--//row-->
                      <div class="resume-position-time">Maret 2015 - Now</div>
                    </div>
                    <!--//resume-timeline-item-header-->
                    <div class="resume-timeline-item-desc">
                      <p>
                        Take a part in online programming course at dicoding.com (dicoding
                        academy) and get some IT certificate. I also join their challenge
                        program (dicoding challenge) to test my skill and also win some awards
                        and prizes.
                      </p>
                      <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                        Learning
                        Achievements
                      </h4>

                      <ul>
                        <li>(2016) Learn to build Android App HTML5, dicoding.com</li>
                        <li>(2017) Learn to build LINE ChatBot, dicoding.com</li>
                        <li>
                          (2017) Learn to build android app with IBM Bluemix,
                          dicoding.com
                        </li>
                        <li>(2017) Learn to build android app for beginner, dicoding.com</li>
                        <li>(2017) Learn to build android app for Expert, dicoding.com</li>
                      </ul>

                      <br />

                      <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                        Awards
                        Achievements
                      </h4>
                      <ul>
                        <li>
                          <div class="resume-award-name">
                            Tizen Thematic Challenges - Tools
                            <a
                              href="http://www.tizenstore.com/main/getDetail.as?Id=FiPyYQTTJm"
                              target="_blank"
                              rel="noopener noreferrer"
                            >Morse Code</a>
                          </div>
                          <div class="resume-award-desc">by Samsung Indonesia</div>
                        </li>

                        <li>
                          <div class="resume-award-name">
                            DBS Live More Society: Developer
                            Challenge
                            <a
                              href="http://www.tizenstore.com/main/getDetail.as?Id=FiPyYQTTJm"
                              target="_blank"
                              rel="noopener noreferrer"
                            >Morse Code</a>
                          </div>
                          <div class="resume-award-desc">by DBS Indonesia</div>
                        </li>

                        <li>
                          <div class="resume-award-name">
                            Indonesia Next Apps 4.0 – Tizen
                            Smartphone
                            Challenge
                            <a
                              href="http://www.tizenstore.com/main/getDetail.as?Id=FiPyYQTTJm"
                              target="_blank"
                              rel="noopener noreferrer"
                            >Morse Code</a>
                          </div>
                          <div class="resume-award-desc">by dicoding</div>
                        </li>

                        <li>
                          <div class="resume-award-name">
                            Tizen Thematic Challenges - Puzzle
                            Games
                            <a
                              href="http://www.tizenstore.com/main/getDetail.as?Id=BqPsgjNzlZ"
                              target="_blank"
                              rel="noopener noreferrer"
                            >Oei Takuzu</a>
                          </div>
                          <div class="resume-award-desc">by Samsung Indonesia</div>
                        </li>

                        <li>
                          <div class="resume-award-name">
                            LINE Bot Developer Challenge -
                            Cuacaku
                          </div>
                          <div class="resume-award-desc">by LINE Indonesia</div>
                        </li>

                        <li>
                          <div class="resume-award-name">
                            Dicoding Web Master - Data
                            Transportasi Laut
                            Perprovinsi di tahun 2009
                          </div>
                          <div class="resume-award-desc">by dicoding</div>
                        </li>

                        <li>
                          <div class="resume-award-name">
                            Mobile Game Developer Challenge
                            Professional -
                            Run Chibis Run!
                          </div>
                          <div class="resume-award-desc">by intel Indonesia</div>
                        </li>
                      </ul>
                      <br />
                      <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                        Technologies
                        used:
                      </h4>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Javascript</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Apache Cordova</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">HTML/SCSS</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Restfull API</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">IBM bluemix</span>
                        </li>
                        <li class="list-inline-item">
                          <span class="badge badge-primary badge-pill">Tizen Technology</span>
                        </li>
                      </ul>
                    </div>
                    <!--//resume-timeline-item-desc-->
                  </article>
                  <!--//resume-timeline-item-->
                </div>
                <!--//resume-timeline-->
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
                <div class="resume-section-content">
                  <ul class="list-unstyled list-unstyled-education">
                    <li>
                      <div class="resume-degree font-weight-bold">Learn to build PWA</div>
                      <div class="resume-degree-org">dicoding.com</div>
                      <div class="resume-degree-time">2018</div>
                    </li>
                    <li>
                      <div class="resume-degree font-weight-bold">
                        Learn to build Android app for
                        Expert
                      </div>
                      <div class="resume-degree-org">dicoding.com</div>
                      <div class="resume-degree-time">2017</div>
                    </li>
                    <li>
                      <div class="resume-degree font-weight-bold">
                        Learn to build Android App for
                        Beginner
                      </div>
                      <div class="resume-degree-org">dicoding.com</div>
                      <div class="resume-degree-time">2017</div>
                    </li>
                    <li>
                      <div class="resume-degree font-weight-bold">
                        Learn to build Android App with IBM
                        bluemix
                      </div>
                      <div class="resume-degree-org">dicoding.com</div>
                      <div class="resume-degree-time">2017</div>
                    </li>
                    <li>
                      <div class="resume-degree font-weight-bold">Learn to build LINE ChatBot</div>
                      <div class="resume-degree-org">dicoding.com</div>
                      <div class="resume-degree-time">2017</div>
                    </li>
                    <li class="mb-2">
                      <div class="resume-degree font-weight-bold">Learn to build Android HTML5 App</div>
                      <div class="resume-degree-org">dicoding.com</div>
                      <div class="resume-degree-time">2016</div>
                    </li>
                  </ul>
                </div>
              </section>
              <!--//education-section-->
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="body-container">
              <div class="resume-section-content resume-section-content-c">
                <div class="resume-skill-item">
                  <h4 class="resume-skills-cat font-weight-bold">Frontend</h4>
                  <ul class="list-unstyled mb-4">
                    <li class="mb-2">
                      <div class="resume-skill-name">Vue</div>
                      <div class="progress resume-progress">
                        <v-progress-linear value="90"></v-progress-linear>
                      </div>
                    </li>
                    <li class="mb-2">
                      <div class="resume-skill-name">Nuxt</div>
                      <div class="progress resume-progress">
                        <v-progress-linear value="90"></v-progress-linear>
                      </div>
                    </li>
                    <li class="mb-2">
                      <div class="resume-skill-name">JavaScript</div>
                      <div class="progress resume-progress">
                        <v-progress-linear value="90"></v-progress-linear>
                      </div>
                    </li>

                    <li class="mb-2">
                      <div class="resume-skill-name">HTML/CSS/SASS</div>
                      <div class="progress resume-progress">
                        <v-progress-linear value="80"></v-progress-linear>
                      </div>
                    </li>
                  </ul>
                </div>
                <!--//resume-skill-item-->

                <div class="resume-skill-item">
                  <h4 class="resume-skills-cat font-weight-bold">Backend</h4>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <div class="resume-skill-name">Node.js</div>
                      <v-progress-linear value="70"></v-progress-linear>
                    </li>
                    <li class="mb-2">
                      <div class="resume-skill-name">Golang</div>
                      <v-progress-linear value="50"></v-progress-linear>
                    </li>
                  </ul>
                </div>
                <!--//resume-skill-item-->
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>


<script>
export default {
  name: "theme25",
  data: () => ({
    tab: null,
    items: ["About", "Portfolio", "Work", "Education", "Skills"]
  })
};
</script>

<style lang="scss" scoped>

/* 
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto Condensed', sans-serif;
}

#app {
  font-family: 'Roboto Condensed', sans-serif;
}
 */
 
/* * {
  font-family: "Open Sans", sans-serif;
}
 */
.v-tab {
  text-transform: none;
}

/* resume */
.resume-timeline {
  padding-left: 2rem;
}

.resume-timeline:before {
  content: "";
  display: inline-block;
  width: 3px;
  height: 100%;
  background: #aab4c3;
  left: 6px;
  top: 4px;
  position: absolute;
}

.resume-timeline-item:before {
  content: "";
  display: inline-block;
  position: absolute;
  left: -32px;
  top: 3px;
  width: 15px;
  height: 15px;
  border: 4px solid #58677c;
  background: red;
  border-radius: 50%;
}

.resume-timeline-item-desc-heading {
  font-size: 1rem;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

.badge-primary {
  color: #fff;
  background-color: #434e5e;
}

.badge-primary[href]:hover,
.badge-primary[href]:focus {
  color: #fff;
  text-decoration: none;
  background-color: #2e3540;
}

.badge-secondary {
  color: #fff;
  background-color: #58677c;
}

.badge-secondary[href]:hover,
.badge-secondary[href]:focus {
  color: #fff;
  text-decoration: none;
  background-color: #434e5e;
}

.badge-success {
  color: #fff;
  background-color: #28a745;
}

.badge-success[href]:hover,
.badge-success[href]:focus {
  color: #fff;
  text-decoration: none;
  background-color: #1e7e34;
}

.badge-info {
  color: #fff;
  background-color: #17a2b8;
}

.badge-info[href]:hover,
.badge-info[href]:focus {
  color: #fff;
  text-decoration: none;
  background-color: #117a8b;
}

.badge-warning {
  color: #212529;
  background-color: #ffc107;
}

.badge-warning[href]:hover,
.badge-warning[href]:focus {
  color: #212529;
  text-decoration: none;
  background-color: #d39e00;
}

.badge-danger {
  color: #fff;
  background-color: #dc3545;
}

.badge-danger[href]:hover,
.badge-danger[href]:focus {
  color: #fff;
  text-decoration: none;
  background-color: #bd2130;
}

.badge-light {
  color: #212529;
  background-color: #f8f9fa;
}

.badge-light[href]:hover,
.badge-light[href]:focus {
  color: #212529;
  text-decoration: none;
  background-color: #dae0e5;
}

.badge-dark {
  color: #fff;
  background-color: #343a40;
}

.badge-dark[href]:hover,
.badge-dark[href]:focus {
  color: #fff;
  text-decoration: none;
  background-color: #1d2124;
}

/*  */

@media (min-width: 320px) {
  .profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &div {
      flex-basis: calc(100% - 100px);
    }

    .wrap-inside {
      display: block;
      width: 64px;
      height: 64px;
      background-color: #edeff2;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      margin-right: 20px;
    }

    .wrap-text {
      margin-top: 40px;
    }

    .medsos-main-1 {
      display: flex;
      position: absolute;
      top: 0;
      right: 0;
    }

    .medsos-1 {
      display: grid;
      grid-template: 20px 20px / repeat(3, 50%);
      text-align: center;
      margin-top: 10px;
      margin-right: 32px;

      .meditem {
        display: block;
        width: 16px;
        height: 16px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
        background-size: 8px;

        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .medsos-2 {
      display: grid;
      grid-template: 20px 20px / repeat(3, 50%);
      text-align: center;
      margin-top: 10px;

      .meditem {
        display: block;
        width: 16px;
        height: 16px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
        background-size: 8px;
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

  .showontablet {
    display: none !important;
  }

  .showonmobile {
    display: flex !important;
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #1d1d1d;
    box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.12);

    .wrap-image {
      .wrap-inside {
        display: block;
        width: 85px;
        height: 85px;
        background-color: #edeff2;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }
    }

    .wrap-text {
      .name {
        font-weight: 600;
        font-size: 22px;
        line-height: 30px;
        color: #ffffff;
      }

      .title {
        font-weight: 300;
        font-size: 12px !important;
        line-height: 16px;
        color: #ffffff;
      }
    }

    .medsos-main {
      display: flex;
    }

    .medsos {
      display: grid;
      grid-template: 20px 20px / repeat(3, 47%);
      text-align: center;
      margin-top: 37px;
      margin-right: 47px;

      .meditem {
        display: block;
        width: 37px;
        height: 37px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;

        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .medsos2 {
      display: grid;
      grid-template: 20px 20px / repeat(3, 47%);
      text-align: center;
      margin-top: 37px;

      .meditem {
        display: block;
        width: 37px;
        height: 37px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .email {
      display: flex;
      flex-basis: 100%;
      margin-top: 37px;
      justify-content: center;

      .medemail {
        display: block;
        width: 52px;
        height: 52px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 10px;
        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }

      .medpdf {
        display: block;
        width: 52px;
        height: 52px;
        background-color: #000000;
        border-radius: 50%;
        background-position: center center;
        margin-right: 10px;
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

  .header > div {
    margin-right: 10px;
  }

  .about-t {
    margin-top: 37px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #1d1d1d;
  }

  .about-p {
    margin-top: 27px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    color: #1d1d1d;
  }

  .images-portfolio {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    white-space: nowrap;

    .image-p {
      flex: 1 1 auto;
      padding: 10px;
      margin-top: 37px;
      margin-bottom: 26px;
      border: 1px solid #ccc;
      border-radius: 1em;
      margin-right: 10px;
      margin-left: 10px;
      text-align: center;

      width: 300px;
      height: 300px;

      .image {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}

@media (min-width: 360px) {
  .profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &div {
      flex-basis: calc(100% - 100px);
    }

    .wrap-inside {
      display: block;
      width: 64px;
      height: 64px;
      background-color: #edeff2;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      margin-right: 20px;
    }

    .wrap-text {
      margin-top: 40px;
    }

    .medsos-main-1 {
      display: flex;
      position: absolute;
      top: 0;
      right: 0;
    }

    .medsos-1 {
      display: grid;
      grid-template: 20px 20px / repeat(3, 50%);
      text-align: center;
      margin-top: 10px;
      margin-right: 32px;

      .meditem {
        display: block;
        width: 16px;
        height: 16px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
        background-size: 8px;

        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .medsos-2 {
      display: grid;
      grid-template: 20px 20px / repeat(3, 50%);
      text-align: center;
      margin-top: 10px;

      .meditem {
        display: block;
        width: 16px;
        height: 16px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
        background-size: 8px;
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

  .showontablet {
    display: none !important;
  }

  .showonmobile {
    display: flex !important;
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #1d1d1d;
    box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.12);

    .wrap-image {
      .wrap-inside {
        display: block;
        width: 85px;
        height: 85px;
        background-color: #edeff2;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }
    }

    .wrap-text {
      .name {
        font-weight: 600;
        font-size: 22px;
        line-height: 30px;
        color: #ffffff;
      }

      .title {
        font-weight: 300;
        font-size: 12px !important;
        line-height: 16px;
        color: #ffffff;
      }
    }

    .medsos-main {
      display: flex;
      flex-basis: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }

    .medsos {
      display: grid;
      grid-template: 20px 20px / repeat(3, 47%);
      text-align: center;
      margin-top: 37px;
      margin-right: 47px;

      .meditem {
        display: block;
        width: 37px;
        height: 37px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;

        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .medsos2 {
      display: grid;
      grid-template: 20px 20px / repeat(3, 47%);
      text-align: center;
      margin-top: 37px;

      .meditem {
        display: block;
        width: 37px;
        height: 37px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .email {
      display: flex;
      flex-basis: 100%;
      margin-top: 37px;
      justify-content: center;

      .medemail {
        display: block;
        width: 52px;
        height: 52px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 10px;
        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }

      .medpdf {
        display: block;
        width: 52px;
        height: 52px;
        background-color: #000000;
        border-radius: 50%;
        background-position: center center;
        margin-right: 10px;
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

  .header > div {
    margin-right: 10px;
  }

  .about-t {
    margin-top: 37px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #1d1d1d;
  }

  .about-p {
    margin-top: 27px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    color: #1d1d1d;
  }

  .images-portfolio {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    white-space: nowrap;

    .image-p {
      flex: 1 1 auto;
      padding: 10px;
      margin-top: 37px;
      margin-bottom: 26px;
      border: 1px solid #ccc;
      border-radius: 1em;
      margin-right: 10px;
      margin-left: 10px;
      text-align: center;
      width: 300px;
      height: 300px;

      .image {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}

@media (min-width: 767px) {
  .profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &div {
      flex-basis: calc(100% - 100px);
    }

    .wrap-inside {
      display: block;
      width: 85px;
      height: 85px;
      background-color: #edeff2;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      margin-right: 20px;
    }

    .wrap-text {
      margin-top: 40px;
    }

    .medsos-main-1 {
      display: flex;
      position: absolute;
      right: 50px;
    }

    .medsos-1 {
      display: grid;
      grid-template: 20px 20px / repeat(3, 50%);
      text-align: center;
      margin-top: 10px;
      margin-right: 64px;

      .meditem {
        display: block;
        width: 32px;
        height: 32px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
        background-size: 16px;

        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .medsos-2 {
      display: grid;
      grid-template: 20px 20px / repeat(3, 50%);
      text-align: center;
      margin-top: 10px;

      .meditem {
        display: block;
        width: 32px;
        height: 32px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
        background-size: 16px;
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

  .showontablet {
    display: flex !important;
  }

  .showonmobile {
    display: none !important;
  }

  .header > div {
    margin-right: 40px !important;
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #1d1d1d;
    box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.12);
    position: relative;

    .wrap-image {
      .wrap-inside {
        display: block;
        width: 258px;
        height: 258px;
        background-color: #edeff2;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }
    }

    .wrap-text {
      .name {
        font-weight: 600;
        font-size: 40px;
        line-height: 54px;
        color: #ffffff;
      }

      .title {
        font-weight: 300;
        font-style: normal;
        font-size: 21px !important;
        line-height: 29px;
        color: #ffffff;
      }
    }

    .medsos-main {
      display: flex;
      flex-basis: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }

    .medsos {
      display: grid;
      grid-template: 63px 63px / repeat(3, 47%);
      text-align: center;
      margin-top: 37px;
      margin-right: 126px;

      .meditem {
        display: block;
        width: 63px;
        height: 63px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
        background-size: 32px;

        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .medsos2 {
      display: grid;
      grid-template: 63px 63px / repeat(3, 47%);
      text-align: center;
      margin-top: 37px;

      .meditem {
        display: block;
        width: 63px;
        height: 63px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
        background-size: 32px;
        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .email {
      display: flex;
      flex-basis: 100%;
      margin-top: 37px;
      justify-content: center;

      .medemail {
        display: block;
        width: 64px;
        height: 64px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 10px;
        background-size: 32px;
        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }

      .medpdf {
        display: block;
        width: 64px;
        height: 64px;
        background-color: #000000;
        border-radius: 50%;
        background-position: center center;
        margin-right: 10px;
        background-size: 32px;
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

  .about-t {
    margin-top: 37px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #1d1d1d;
  }

  .about-p {
    margin-top: 27px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    color: #1d1d1d;
  }

  .images-portfolio {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    white-space: nowrap;

    .image-p {
      flex: 1 1 auto;
      padding: 10px;
      margin-top: 37px;
      margin-bottom: 26px;
      border: 1px solid #ccc;
      border-radius: 1em;
      margin-right: 10px;
      margin-left: 10px;
      text-align: center;

      width: 300px;
      height: 300px;

      .image {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  .resume-timeline {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;

    .resume-timeline-item {
      padding: 20px;
      border: 1px solid #ccc;
      flex: 1 1 auto;
    }
  }

  .list-unstyled-education {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 20px;
    li {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      flex: 1 1 auto;
    }
  }

  .resume-section-content-c {
    display: grid;
    grid-template: 100px 100px / repeat(2, 50%);
  }
}

@media (min-width: 1024px) {
  .profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &div {
      flex-basis: calc(100% - 100px);
    }

    .wrap-inside {
      display: block;
      width: 85px;
      height: 85px;
      background-color: #edeff2;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      margin-right: 20px;
    }

    .wrap-text {
      margin-top: 40px;
    }

    .medsos-main-1 {
      display: flex;
      position: absolute;
      top: 25px;
      right: 100px;
    }

    .medsos-1 {
      display: grid;
      grid-template: 20px 20px / repeat(3, 47%);
      text-align: center;
      margin-top: 37px;
      margin-right: 47px;

      .meditem {
        display: block;
        width: 37px;
        height: 37px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;

        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .medsos-2 {
      display: grid;
      grid-template: 20px 20px / repeat(3, 47%);
      text-align: center;
      margin-top: 37px;

      .meditem {
        display: block;
        width: 37px;
        height: 37px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
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

  .displaynoneweb {
    display: none !important;
  }

  .body-container {
    position: relative;
    background-color: #fafafa;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.1);
    padding: 10px;
  }

  .text-center {
    text-align: center;
  }

  .showontablet {
    display: flex !important;
  }

  .showonmobile {
    display: none !important;
  }

  .header > div {
    margin-right: 10px !important;
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #1d1d1d;
    box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.12);
    position: relative;

    .wrap-image {
      .wrap-inside {
        display: block;
        width: 85px;
        height: 85px;
        background-color: #edeff2;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }
    }

    .wrap-text {
      .name {
        font-weight: 600;
        font-size: 22px;
        line-height: 30px;
        color: #ffffff;
      }

      .title {
        font-weight: 300;
        font-size: 12px !important;
        line-height: 16px;
        color: #ffffff;
      }
    }

    .medsos-main {
      display: flex;
      flex-basis: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }

    .medsos {
      display: grid;
      grid-template: 20px 20px / repeat(3, 23%);
      text-align: center;
      margin-top: 37px;
      margin-right: 126px;

      .meditem {
        display: block;
        width: 32px;
        height: 32px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
        background-size: 16px;

        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .medsos2 {
      display: grid;
      grid-template: 20px 20px / repeat(3, 47%);
      text-align: center;
      margin-top: 37px;

      .meditem {
        display: block;
        width: 32px;
        height: 32px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 5px;
        background-size: 16px;
        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .email {
      display: flex;
      flex-basis: 100%;
      margin-top: 37px;
      justify-content: center;

      .medemail {
        display: block;
        width: 32px;
        height: 32px;
        background-color: #edeff2;
        border-radius: 50%;
        background-position: center center;
        margin-right: 10px;
        background-size: 16px;
        &:hover {
          transform: scale(1.05, 1.05);
          cursor: pointer;
        }

        &:active {
          transform: scale(0.95, 0.95);
        }
      }

      .medpdf {
        display: block;
        width: 32px;
        height: 32px;
        background-color: #000000;
        border-radius: 50%;
        background-position: center center;
        margin-right: 10px;
        background-size: 16px;
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

  .about-t {
    margin-top: 37px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #1d1d1d;
    text-align: center;
  }

  .about-p {
    margin-top: 27px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    color: #1d1d1d;
  }

  .images-portfolio {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    white-space: nowrap;

    .image-p {
      flex: 1 1 auto;
      padding: 10px;
      margin-top: 37px;
      margin-bottom: 26px;
      border: 1px solid #ccc;
      border-radius: 1em;
      margin-right: 10px;
      margin-left: 10px;
      text-align: center;

      width: 300px;
      height: 300px;

      .image {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  .resume-timeline {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 20px;

    .resume-timeline-item {
      padding: 20px;
      border: 1px solid #ccc;
      flex: 1 1 auto;
    }
  }

  .list-unstyled-education {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 20px;
    li {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      flex: 1 1 auto;
    }
  }

  .resume-section-content-c {
    display: grid;
    grid-template: 100px 100px / repeat(2, 50%);
  }
}
</style>
