import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Index from "./views/TournamentsIndex.vue";
import TournamentsShow from "./views/TournamentsShow.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/tournaments/:id",
      name: "tournaments-show",
      component: TournamentsShow
    },
    {
      path: "/tournaments",
      name: "TournamentsIndex",
      component: Index
    },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
