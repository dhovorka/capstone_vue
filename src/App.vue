<template>
  <div id="app">
    <!--  <header id="fh5co-header-section">
      <div class="container"> -->
    <!-- <a href="/signup">Signup</a> || <a href="/login">Login</a> || <a href="/logout">Logout</a> -->

    <!-- <div class="nav-header"> -->
    <!-- <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
          <h1 id="fh5co-logo">
            <a href="index.html"><i class="icon-home2"></i>Tennis|FINDR</a>
          </h1> -->
    <!-- START #fh5co-menu-wrap -->
    <!-- <nav id="fh5co-menu-wrap" role="navigation">
            <ul class="sf-menu" id="fh5co-primary-menu">
              <li><a class="active" href="index.html">Home</a></li>
              <li>
                <a href="services.html" class="fh5co-sub-ddown">Tournaments</a>
                <ul class="fh5co-sub-menu">
                  <li><a href="left-sidebar.html">Web Development</a></li>
                  <li><a href="right-sidebar.html">Branding &amp; Identity</a></li>
                  <li>
                    <a href="#" class="fh5co-sub-ddown">Free HTML5</a>
                    <ul class="fh5co-sub-menu">
                      <li>
                        <a href="http://freehtml5.co/preview/?item=build-free-html5-bootstrap-template" target="_blank"
                          >Build</a
                        >
                      </li>
                      <li>
                        <a href="http://freehtml5.co/preview/?item=work-free-html5-template-bootstrap" target="_blank"
                          >Work</a
                        >
                      </li>
                      <li>
                        <a href="http://freehtml5.co/preview/?item=light-free-html5-template-bootstrap" target="_blank"
                          >Light</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://freehtml5.co/preview/?item=relic-free-html5-template-using-bootstrap"
                          target="_blank"
                          >Relic</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://freehtml5.co/preview/?item=display-free-html5-template-using-bootstrap"
                          target="_blank"
                          >Display</a
                        >
                      </li>
                      <li>
                        <a href="http://freehtml5.co/preview/?item=sprint-free-html5-template-bootstrap" target="_blank"
                          >Sprint</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">UI Animation</a></li>
                  <li><a href="#">Copywriting</a></li>
                  <li><a href="#">Photography</a></li>
                </ul>
              </li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header> -->

    <div id="nav">
      <router-link to="/">Home</router-link> || <router-link to="/tournaments">Tournaments</router-link> ||
      <a href="/signup">Signup</a> || <a href="/login">Login</a> || <a href="/logout">Logout</a>

      <!-- <aside id="fh5co-hero" class="js-fullheight">
        <div class="flexslider js-fullheight">
          <ul class="slides">
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
            <li style="background-image: url(https://www.roadtrips.com/wp-content/uploads/2016/10/us-open.jpg);">
              <div class="overlay-gradient"></div>
              <div class="container">
                <div class="col-md-5 col-sm-6 col-xs-12 js-fullheight slider-text">
                  <div class="slider-text-inner">
                    <div class="desc">
                      <h2>U.S.OPEN</h2>
                      <p><a href="#" class="btn btn-primary btn-outline">View Details</a></p>
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
          <a href="#">
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
          <a href="#">
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
          <a href="/tournaments/4">
            <img src="http://www.tenniskeys.com/images/cincinnati/cin33.jpg" alt="Project" class="img-responsive" />
            <div class="desc text-center">
              <h2>CINCINNATI MASTERS</h2>
            </div>
          </a>
        </div>
      </div>
    </div> -->
      <router-view />

      <footer>
        <div id="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <h3 class="section-title">About Us</h3>
                <p>
                  Do you love tennis? Hey, so do we. The only thing we might love more is traveling. Our passion lies at
                  the crossroads of these two hobbies.
                </p>
              </div>

              <div class="col-md-3">
                <h3 class="section-title">Tournaments</h3>
                <ul>
                  <li><a href="/tournaments/3">Australian Open</a></li>
                  <li><a href="#">Wimbledon</a></li>
                  <li><a href="#">French Open</a></li>
                  <li><a href="#">U.S. Open</a></li>
                  <li><a href="#">Indian Wells</a></li>
                  <li><a href="#">Monte Carlo Masters</a></li>
                  <!-- <li><a href="#"></a></li> -->
                </ul>
              </div>

              <div class="col-md-3">
                <h3 class="section-title">Our Address</h3>
                <ul class="contact-info">
                  <li><i class="icon-map2"></i> Address here</li>
                  <li><i class="icon-phone2"></i>+ 555-555-5555</li>
                  <li><i class="icon-envelope2"></i><a href="#">info@yoursite.com</a></li>
                  <li><i class="icon-globe2"></i><a href="#">www.yoursite.com</a></li>
                </ul>
              </div>
              <div class="col-md-3">
                <h3 class="section-title">Drop us a line</h3>
                <form class="contact-form">
                  <div class="form-group">
                    <label for="name" class="sr-only">Name</label>
                    <input type="name" class="form-control" id="name" placeholder="Name" />
                  </div>
                  <div class="form-group">
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email" />
                  </div>
                  <div class="form-group">
                    <label for="message" class="sr-only">Message</label>
                    <textarea class="form-control" id="message" rows="7" placeholder="Message"></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" id="btn-submit" class="btn btn-send-message btn-md" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>
            <div class="row copy-right">
              <div class="col-md-6 col-md-offset-3 text-center">
                <p class="fh5co-social-icons">
                  <!-- <a href="#"><i class="icon-twitter2"></i></a>
                  <a href="#"><i class="icon-facebook2"></i></a>
                  <a href="#"><i class="icon-instagram"></i></a>
                  <a href="#"><i class="icon-dribbble2"></i></a>
                  <a href="#"><i class="icon-youtube"></i></a> -->
                </p>
                <p>
                  <!-- &copy; 2016 Free Html5 <a href="#">Tennis</a>. All Rights Reserved. <br />Made with
                  <i class="icon-heart3"></i> by <a href="http://freehtml5.co/" target="_blank">Freehtml5.co</a> / Demo
                  Images: <a href="https://unsplash.com/" target="_blank">Unsplash </a>,<a
                    href="https://pexels.com/"
                    target="_blank" -->
                  <!-- >
                    Pexels</a
                  >
                  <br />
                  Colored Icons: <a href="http://flaticon.com" target="_blank">Flaticon</a> -->
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style></style>
