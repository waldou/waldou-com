<template>
  <div id="app">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'App',
  components: {
    NavigationBar
  },
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
</style>

<style src='normalize.css'>
</style>
