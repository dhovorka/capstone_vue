<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to THE JUNGLE" /> -->
    <!--  <a href="/signup">Signup</a> || <a href="/login">Login</a> || <a href="/logout">Logout</a> -->
    <!-- <h1>All Tournaments</h1>
    <div v-for="tournament in tournaments">
      <h2>{{ tournament.name }}</h2>
      <p>Location: {{ tournament.location }}</p>
      <p>Information: {{ tournament.description }}</p>
      <router-link v-bind:to="`/tournaments/${tournament.id}`">Show Full Detail</router-link> -->
    <!-- <div>Comment: <input type="text" v-model="newCommentContent" /></div>
      <button v-on:click="createComment()">Create Comment</button> -->
    <!--     <button v-on:click="showTournament(tournament)">Show here</button> -->
    <!--  <button v-on:click="showTournament(tournament)">Show Comments</button> -->
    <!-- <p>Comments: {{ tournament.tournament_comments.length }}</p>
      <div v-for="comment in tournament.tournament_comments">
        {{ comment.content }} -->

    <template>
      <div id="app">
        <header id="fh5co-header-section">
          <div class="container">
            <!-- <a href="/signup">Signup</a> || <a href="/login">Login</a> || <a href="/logout">Logout</a> -->

            <div class="nav-header">
              <a href="/" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
              <h1 id="fh5co-logo">
                <a href="/"><i class="icon-home2"></i>Tennis|FINDR</a>
              </h1>
              <!-- START #fh5co-menu-wrap -->
              <nav id="fh5co-menu-wrap" role="navigation">
                <ul class="sf-menu" id="fh5co-primary-menu">
                  <li><a class="active" href="/">Home</a></li>
                  <li>
                    <a href="/tournaments" class="fh5co-sub-ddown">Tournaments</a>
                    <ul class="fh5co-sub-menu">
                      <li><a href="/tournaments/1">Australian Open</a></li>
                      <li><a href="/tournaments/2">French Open</a></li>
                      <li>
                        <a href="/tournaments/3" class="fh5co-sub-ddown">Wimbledon</a>
                      </li>
                      <li><a href="/tournaments/4">U.S.Open</a></li>
                      <li><a href="/tournaments/5">Indian Wells</a></li>
                      <li><a href="/tournaments/6">Monte Carlo Masters</a></li>
                      <li><a href="/tournaments/16">Cincinnati Masters</a></li>
                    </ul>
                  </li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <div id="nav">
          <!-- <router-link to="/">Home</router-link> -->
          <!-- <router-link to="/about">About</router-link> -->
          <aside id="fh5co-hero" class="js-fullheight">
            <div class="flexslider js-fullheight">
              <ul class="slides">
                <li style="background-image: url(https://www.roadtrips.com/wp-content/uploads/2016/10/us-open.jpg);">
                  <div class="overlay-gradient"></div>
                  <div class="container">
                    <div class="col-md-5 col-sm-6 col-xs-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h2>U.S.Open</h2>
                          <p><a href="/tournaments/4" class="btn btn-primary btn-outline">View Details</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style="background-image: url(http://www.tennisticketnews.com/wp-content/uploads/2008/06/French-Open.jpg);"
                >
                  <div class="overlay-gradient"></div>
                  <div class="container">
                    <div class="col-md-5 col-sm-6 col-xs-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h2>French Open</h2>
                          <p><a href="/tournaments/2" class="btn btn-primary btn-outline">View Details</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style="background-image: url(https://www.roadtrips.com/wp-content/uploads/2016/10/tickets.jpg);">
                  <div class="overlay-gradient"></div>
                  <div class="container">
                    <div class="col-md-5 col-sm-6 col-xs-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h2>Wimbledon</h2>
                          <p><a href="/tournaments/3" class="btn btn-primary btn-outline">View Details</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
          <div id="fh5co-section">
            <div class="grid-project-section">
              <a href="/tournaments/6">
                <img
                  src="https://www.tennisworldusa.org/imgb/58280/atp-monte-carlo-rolex-masters-preview-who-will-win-survey-inside.jpg"
                  alt="Project"
                  class="img-responsive"
                />
                <div class="desc text-center">
                  <h2>MONTE CARLO MASTERS</h2>
                </div>
              </a>
            </div>
            <div class="grid-project-section">
              <a href="/tournaments/5">
                <img
                  src="https://bnpparibasopen.com/wp-content/uploads/2018/01/2018-group-mini.jpg"
                  alt="Project"
                  class="img-responsive"
                />
                <div class="desc text-center">
                  <h2>INDIAN WELLS</h2>
                </div>
              </a>
            </div>
            <div class="grid-project-section">
              <a href="/tournaments/16">
                <img
                  src="https://media.bizj.us/view/img/11011677/img8437*1200xx3600-2025-0-188.jpg"
                  alt="Project"
                  class="img-responsive"
                />
                <div class="desc text-center">
                  <h2>CINCINNATI MASTERS</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
        <router-view />
      </div>
    </template>

    <!-- <script>
      import axios from "axios";
      // @ is an alias to /src
      // import HelloWorld from "@/components/HelloWorld.vue";
      export default {
        data: function() {
          return {
            tournaments: []
          };
        },
        created: function() {
          axios.get("/api/tournaments").then(response => {
            this.tournaments = response.data;
          });
        },
        methods: {}
      };
    </script>
  </div>
</template> -->
  </div></template
>
