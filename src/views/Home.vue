<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to THE JUNGLE" /> -->
    <h1>All Tournaments</h1>
    <div v-for="tournament in tournaments">
      <h2>{{ tournament.name }}</h2>
      <p>Location: {{ tournament.location }}</p>
      <p>Information: {{ tournament.description }}</p>
      <router-link v-bind:to="`/tournaments/${tournament.id}`"> View Comments</router-link>
      <button v-on:click="showTournament(tournament)">Show here</button>
      <!--  <button v-on:click="showTournament(tournament)">Show Comments</button> -->
      <!-- <p>Comments: {{ tournament.tournament_comments.length }}</p>
      <div v-for="comment in tournament.tournament_comments">
        {{ comment.content }} -->
    </div>
  </div>
</template>

<script>
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
