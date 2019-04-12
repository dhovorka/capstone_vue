<template>
  <div class="home">
    <h1>All Tournaments</h1>
    <div v-for="tournament in tournaments">
      <h2>{{ tournament.name }}</h2>
      <p>Location: {{ tournament.location }}</p>
      <p>Information: {{ tournament.description }}</p>

      <!-- Looking to show all comments for each tournament -->
      <!-- <div v-for="comment in comments"> -->
      <p>Comments: {{ tournament.id.comments }}</p>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      tournaments: [],
      comments: []
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
