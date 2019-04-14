<template>
  <div class="tournaments-show">
    <h2>Name: {{ tournament.name }}</h2>
    <h2>{{ tournament.name }}</h2>
    <p>Location: {{ tournament.location }}</p>
    <p>Information: {{ tournament.description }}</p>

    <!-- Looking to show all comments for each tournament -->
    <!-- <div v-for="comment in comments"> -->
    <p>Comments: {{ tournament.id.comments }}</p>
    <div v-for="comment in tournament.tournament_comments">
      {{ comment.content }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      tournament: {}
    };
  },
  created: function() {
    axios.get("/api/tournaments/" + this.$route.params.id).then(response => {
      this.tournament = response.data;
    });
  },
  methods: {
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
