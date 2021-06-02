<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/sign-up">Sign Up</router-link> |
    <router-link to="/orderform">Order Form</router-link> |
    <router-link to="/top-up">Top Up</router-link>
  </div>
  <router-view />
  <br />
  <br />
  <hr />
  <footer>
    <div class="container grid-container-two">
      <div class="grid-item">
        <ul class="footer-links">
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/orderform">ORDER FORM</a></li>
          <li><a href="/top-up">TOP UP</a></li>
        </ul>
      </div>
      <div class="grid-item">
        <ul class="footer-links">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">TERMS & CONDITIONS</a></li>
          <br />
          <li><p>&copy; 2021 Copyright: St. Hilda's Canteen</p></li>
        </ul>
      </div>
      <!-- <div class="grid-item">
        <p>&copy; 2021 Copyright: St. Hilda's Canteen</p>
      </div> -->
    </div>
  </footer>
</template>

<style>
body,
html,
#app {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  font-size: 10px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #25254d;
}

.footer-links {
  list-style-type: none;
}

a:link,
a:visited,
a:hover,
a:active {
  color: #2c3e50;
  text-decoration: none;
}
</style>
