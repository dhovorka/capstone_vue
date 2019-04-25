<template>
  <div id="app">
    <header id="fh5co-header-section">
      <div class="container">
        <div class="nav-header">
          <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
          <h1 id="fh5co-logo">
            <a href="index.html"><i class="icon-home2"></i>Beam</a>
          </h1>
          <!-- START #fh5co-menu-wrap -->
          <nav id="fh5co-menu-wrap" role="navigation">
            <ul class="sf-menu" id="fh5co-primary-menu">
              <li>
                <a class="active" href="index.html">Home</a>
              </li>
              <li><a href="work.html">Projects</a></li>
              <li>
                <a href="services.html" class="fh5co-sub-ddown">Services</a>
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
    </header>

    <div id="nav">
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/about">About</router-link> -->
      <aside id="fh5co-hero" class="js-fullheight">
        <div class="flexslider js-fullheight">
          <ul class="slides">
            <li style="background-image: url(images/slide_1.jpg);">
              <div class="overlay-gradient"></div>
              <div class="container">
                <div class="col-md-5 col-sm-6 col-xs-12 js-fullheight slider-text">
                  <div class="slider-text-inner">
                    <div class="desc">
                      <h2>We shape our buildings; thereafter they shape Us.</h2>
                      <p><a href="#" class="btn btn-primary btn-outline">View Details</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style="background-image: url(images/slide_2.jpg);">
              <div class="overlay-gradient"></div>
              <div class="container">
                <div class="col-md-5 col-sm-6 col-xs-12 js-fullheight slider-text">
                  <div class="slider-text-inner">
                    <div class="desc">
                      <h2>Architecture is a visual art, and the buildings speak for themselves.</h2>
                      <p><a href="#" class="btn btn-primary btn-outline">View Details</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style="background-image: url();">
              <div class="overlay-gradient"></div>
              <div class="container">
                <div class="col-md-5 col-sm-6 col-xs-12 js-fullheight slider-text">
                  <div class="slider-text-inner">
                    <div class="desc">
                      <h2>Architecture begins where engineering ends.</h2>
                      <p><a href="#" class="btn btn-primary btn-outline">View Details</a></p>
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
            <img src="images/project-1.jpg" alt="Project" class="img-responsive" />
            <div class="desc text-center">
              <h2>Ohio Building</h2>
            </div>
          </a>
        </div>
        <div class="grid-project-section">
          <a href="#">
            <img src="images/project-2.jpg" alt="Project" class="img-responsive" />
            <div class="desc text-center">
              <h2>Bridge of London</h2>
            </div>
          </a>
        </div>
        <div class="grid-project-section">
          <a href="#">
            <img src="images/project-3.jpg" alt="Project" class="img-responsive" />
            <div class="desc text-center">
              <h2>New York City</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
    <router-view />

    <footer>
      <div id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h3 class="section-title">About Us</h3>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.
              </p>
            </div>

            <div class="col-md-3">
              <h3 class="section-title">Our Services</h3>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Branding &amp; Identity</a></li>
                <li><a href="#">Free HTML5</a></li>
                <li><a href="#">HandCrafted Templates</a></li>
                <li><a href="#">Free Bootstrap Template</a></li>
                <li><a href="#">Free HTML5 Template</a></li>
                <li><a href="#">Free HTML5 &amp; CSS3 Template</a></li>
                <li><a href="#">HandCrafted Templates</a></li>
              </ul>
            </div>

            <div class="col-md-3">
              <h3 class="section-title">Our Address</h3>
              <ul class="contact-info">
                <li><i class="icon-map2"></i>198 West 21th Street, Suite 721 New York NY 10016</li>
                <li><i class="icon-phone2"></i>+ 1235 2355 98</li>
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
                <a href="#"><i class="icon-twitter2"></i></a>
                <a href="#"><i class="icon-facebook2"></i></a>
                <a href="#"><i class="icon-instagram"></i></a>
                <a href="#"><i class="icon-dribbble2"></i></a>
                <a href="#"><i class="icon-youtube"></i></a>
              </p>
              <p>
                &copy; 2016 Free Html5 <a href="#">Beam</a>. All Rights Reserved. <br />Made with
                <i class="icon-heart3"></i> by <a href="http://freehtml5.co/" target="_blank">Freehtml5.co</a> / Demo
                Images: <a href="https://unsplash.com/" target="_blank">Unsplash </a>,<a
                  href="https://pexels.com/"
                  target="_blank"
                >
                  Pexels</a
                >
                <br />
                Colored Icons: <a href="http://flaticon.com" target="_blank">Flaticon</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style></style>
