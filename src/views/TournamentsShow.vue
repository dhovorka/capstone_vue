<template>
  <div class="tournaments-show container">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <aside id="fh5co-hero" class="js-fullheight">
      <div class="flexslider js-fullheight">
        <ul class="slides">
          <li style="background-image: url(https://www.roadtrips.com/wp-content/uploads/2016/10/tickets.jpg);">
            <div class="overlay-gradient"></div>
            <div class="container">
              <div class="col-md-10 col-md-offset-1 text-center js-fullheight slider-text">
                <div class="slider-text-inner desc">
                  <h2 class="heading-section">{{ tournament.name }}</h2>
                  <p class="fh5co-lead">
                    {{ tournament.description }}
                    <a href="https://ausopen.com/" target="_blank">AO.com</a>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
    <h2>{{ tournament.name }}</h2>
    <p>{{ tournament.location }}</p>
    <p>{{ tournament.description }}</p>
    <!-- <router-link to="/">Back to All Tournaments</router-link> <br /> -->
    <div>Comment: <input type="text" v-model="newCommentContent" /></div>

    <button v-on:click="createComment()">Create Comment</button>
    <br />
    <div v-for="comment in tournament.tournament_comments">
      {{ comment.content }} ||
      {{ comment.created_at }}
    </div>
    <router-link to="/tournaments">Back to All Tournaments</router-link>
    <div
      data-skyscanner-widget="InsiderTipsWidget"
      data-tip-type="day_price"
      data-origin-name="'Chicago'"
      data-destination-name="'Melbourne'"
    ></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      tournament: {},
      currentTournament: "",
      current_tournament_id: "",
      newCommentContent: "",
      testCityOne: ""
    };
  },
  created: function() {
    axios.get("/api/tournaments/" + this.$route.params.id).then(response => {
      this.tournament = response.data;
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
        this.$router.push("/");
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
