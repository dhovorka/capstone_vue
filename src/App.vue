<template>
  <div id="app">
    <div id="nav">
      <!-- <a href="/signup">Signup</a> || <a href="/login">Login</a> || <a href="/logout">Logout</a> -->
      <header id="fh5co-header-section">
        <div class="container">
          <!-- <a href="/signup">Signup</a> || <a href="/login">Login</a> || <a href="/logout">Logout</a> -->

          <div class="nav-header">
            <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
            <h1 id="fh5co-logo">
              <a href="/"><i class="icon-home2"></i>Tennis|FINDR</a>
            </h1>
            <!-- START #fh5co-menu-wrap -->
            <nav id="fh5co-menu-wrap" role="navigation">
              <ul class="sf-menu" id="fh5co-primary-menu">
                <li><a class="active" href="/">Home</a></li>
                <li>
                  <a href="/tournaments" class="fh5co-sub-ddown">Tournaments</a>
                  <ul class="fh5co-sub-menu">
                    <li><a href="/tournaments/1">Australian Open</a></li>
                    <li><a href="/tournaments/2">French Open</a></li>
                    <li>
                      <a href="/tournaments/3" class="fh5co-sub-ddown">Wimbledon</a>
                    </li>
                    <li><a href="/tournaments/4">U.S.Open</a></li>
                    <li><a href="/tournaments/5">Indian Wells</a></li>
                    <li><a href="/tournaments/6">Monte Carlo Masters</a></li>
                    <li><a href="/tournaments/16">Cincinnati Masters</a></li>
                  </ul>
                </li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
                  <li><a href="/tournaments/1">Australian Open</a></li>
                  <li><a href="/tournaments/3">Wimbledon</a></li>
                  <li><a href="/tournaments/2">French Open</a></li>
                  <li><a href="/tournaments/4">U.S. Open</a></li>
                  <li><a href="/tournaments/5">Indian Wells</a></li>
                  <li><a href="/tournaments/6">Monte Carlo Masters</a></li>
                  <!-- <li><a href="#"></a></li> -->
                </ul>
              </div>

              <div class="col-md-3">
                <h3 class="section-title">Contact Information</h3>
                <ul class="contact-info">
                  <li><i class="icon-map2"></i>1 N Dearborn Ave, Chicago IL, 60601</li>
                  <li><i class="icon-phone2"></i>+ 555-555-5555</li>
                  <li><i class="icon-envelope2"></i><a href="#">info@tennisfindr.com</a></li>
                  <li><i class="icon-globe2"></i><a href="#">www.tennisfindr.com</a></li>
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
                <p class="fh5co-social-icons"></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#map {
  position: absolute;
  top: 125%;
  left: 0;
  bottom: 100;
  height: 50%;
  width: 100%;
}
#marker {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNyThroJwmYgLACyJR5G8k5yXxobrJyijSrcq_f9Gdt5IGvCH");
  background-size: cover;
  top: 50;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 100%;
}
</style>
