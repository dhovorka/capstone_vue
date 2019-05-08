<template>
  <div class="tournaments-show container">
    <div id="map"></div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <aside id="fh5co-hero" class="js-fullheight">
      <div class="flexslider js-fullheight">
        <ul class="slides">
          <li :style="{ backgroundImage: 'url(' + tournament.image + ')' }">
            <div class="overlay-gradient"></div>
            <div class="container">
              <div class="col-md-10 col-md-offset-1 text-center js-fullheight slider-text">
                <div class="slider-text-inner desc">
                  <h2 class="heading-section">{{ tournament.name }}</h2>
                  <p class="fh5co-lead">
                    {{ tournament.location }} <br />
                    {{ tournament.description }}
                    <a :href="tournament.website" target="_blank"><br />{{ tournament.website }}</a>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
    <!-- <router-link to="/">Back to All Tournaments</router-link> <br /> -->
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div>Comment: <input type="text" v-model="newCommentContent" /></div>

    <button v-on:click="createComment()">Create Comment</button>
    <br />
    Search previous comments:
    <input type="text" v-model="searchFilter" />
    <br />
    <div v-for="comment in filterBy(tournament.tournament_comments, searchFilter, 'content')">
      <!-- {{ comment.created_at }} -->
      {{ comment.content }}
      <br />
      <br />
    </div>
    <router-link to="/tournaments">Back to All Tournaments</router-link>
  </div>
</template>

<script>
/* global mapboxgl */

import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      tournament: {},
      currentTournament: "",
      current_tournament_id: "",
      newCommentContent: "",
      testCityOne: "",
      searchFilter: ""
      // points_of_interest: {
      //   1: ["", "", "", ""],
      //   2: [],
      //   3: [],
      //   sortAttribute: "title",
      //   sortAscending: 1,
    };
  },
  mounted: function() {
    axios.get("/api/tournaments/" + this.$route.params.id).then(response => {
      this.tournament = response.data;

      mapboxgl.accessToken = "";

      var monument = this.tournament.coordinates.split(", ");
      console.log(monument);
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: monument,
        zoom: 13
      });

      // create the popup
      var popup = new mapboxgl.Popup({ offset: 25 }).setText("Tournament Site");

      // create DOM element for the marker
      var el = document.createElement("div");
      el.id = "marker";

      // create the marker
      new mapboxgl.Marker(el)
        .setLngLat(monument)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
    });
  },
  methods: {
    createComment: function() {
      var params = {
        content: this.newCommentContent,
        tournament_id: this.tournament.id
      };
      // console.log("createComment", params);
      axios.post("/api/comments", params).then(response => {
        this.comments.push(response.data);
        this.newCommentContent;
        // this.$router.push("/");
      });
    },
    updateTournament: function(tournament) {
      var params = {
        name: tournament.name,
        location: tournament.location,
        description: tournament.description
      };
    }
  }
};
</script>
