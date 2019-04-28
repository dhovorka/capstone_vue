<template>
  <div class="home">
    <br />
    <br />
    <br />
    <br />
    <br />
    <div v-for="tournament in tournaments">
      <h2>{{ tournament.name }}</h2>
      <p>Location: {{ tournament.location }}</p>
      <p>Information: {{ tournament.description }}</p>
      <router-link v-bind:to="`/tournaments/${tournament.id}`">Show Full Detail</router-link>
      <!-- Looking to show all comments for each tournament -->
      <!-- <div v-for="comment in comments"> -->
      <!-- <p>Comments: {{ tournament.id.comments }}</p>
      <div v-for="comment in tournament.tournament_comments">
        {{ comment.content }}
        {{ comment.user_id }} -->
    </div>
  </div>
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
