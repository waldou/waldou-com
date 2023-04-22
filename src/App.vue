<template>
  <div id="app">
    <router-view />
    <div id="cookies-consent" v-if="getCookie('tracking-consent') == null">
      <p>{{ $t('consent.notice') }}</p>
      <button class="consent-button" type="button" @click="consent()">
        {{ $t('consent.consent') }}
      </button>
      <button class="consent-button" type="button" @click="revokeConsent()">
        {{ $t('consent.revoke') }}
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    setCookie: function(name, value, days) {
      var expires = '';
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
      }
      document.cookie = name + '=' + (value || '') + expires + '; path=/';
    },
    getCookie: function(name) {
      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    },
    consent: function() {
      this.setCookie('tracking-consent', 'true', 365);
      location.reload();
    },
    revokeConsent: function() {
      this.setCookie('tracking-consent', 'false', 365);
      location.reload();
    }
  }
}
</script>

<style lang="scss">
@charset "utf-8";
@import "@/scss/palette.scss";

@font-face {
	font-family: myFont;
	color: $color-white;
    src: url('../public/css/ffdin_r_l.eot?#iefix') format('embedded-opentype'),
         url('../public/css/ffdin_r_l.woff') format('woff'),
         url('../public/css/ffdin_r_l.ttf')  format('truetype'),
         url('../public/css/ffdin_r_l.svg#svgFontName') format('svg');
}

body {
	background-color: $color-background;
	margin: 0px;
	color: $color-white;
  text-shadow: 2px 2px $color-black;
  font-family: myFont;
}

a:link {
  text-decoration: none;
  color: $color-primary;
}

a:visited {
  text-decoration: none;
  color: $color-primary;
}

a:active {
  text-decoration: none;
  color: $color-primary;
}

a:hover {
  text-decoration:underline;
  color: $color-link-hover;
  transition: 300ms;
}

img {
  border: 0;
}

table {
  border: 0px;
  border-collapse: collapse;
}

h1 {
  font-size:1.4em;
  color: $color-white;
  text-shadow: 2px 2px $color-black;
}

h2 {
  font-size:1.2em;
  color: $color-white;
	text-shadow: 2px 2px $color-black;
}

h3 {
  font-size: 1.1em;
  color: $color-white;
  text-shadow: 2px 2px $color-black;
}

h3 a {
  font-size: 1.1em;
  color: $color-primary;
  text-shadow: 2px 2px $color-black;
}

hr {
  margin: auto auto;
  border: 1px solid $color-white;
  border-bottom: none;
  padding-left: 48px;
  max-width: 90%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 96px;
}

.centered {
	max-width: 1024px;
  margin: auto auto;
}

.quoted-text {
	font-style: italic;
}

#cookies-consent {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: $color-white;
  color: $color-music-one;
  text-shadow: none;
  padding: 16px;
}

#cookies-consent p {
  padding: 0xp;
  margin: 0px;
}

.consent-button {
  background-color: $color-music-five;
  color: $color-white;
  padding: 8px 0px 8px 0px;
  margin: 8px 8px 0px 0px;
  border: 0px;
	border-radius: 8px;
  cursor: pointer;
  width: 100px;
}

.consent-button:hover {
  background-color: $color-music-four;
  transition: 200ms;
}
</style>

<style src='normalize.css'>
</style>
