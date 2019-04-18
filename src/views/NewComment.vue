<template>
  <div class="comments-new">
    <h1>Create New Comment</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <div>Content: <input type="text" v-model="newCommentContent" /></div>
    <button v-on:click="createComment()">
      Create Comment
    </button>
  </div>
</template>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      comments: [],
      newCommentContent: ""
    };
  },
  methods: {
    createComment: function() {
      var params = {
        content: this.newCommentContent
      };
      axios
        .post("/api/comments", params)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
