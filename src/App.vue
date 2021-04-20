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

<style>
@charset "utf-8";

@font-face {
	font-family: myFont;
	color:#575A5C;
    src: url('/css/ffdin_r_l.eot?#iefix') format('embedded-opentype'),
         url('/css/ffdin_r_l.woff') format('woff'),
         url('/css/ffdin_r_l.ttf')  format('truetype'),
         url('/css/ffdin_r_l.svg#svgFontName') format('svg');
}

body {
	background-color: #F5F5F5;
	margin: 0px;
	color:#575A5C;
  font-family: myFont;
}

a:link {
  text-decoration: none;
  color: #1C9DFF
}

a:visited {
  text-decoration: none;
  color: #1C9DFF
}

a:active {
  text-decoration: none;
  color: #1C9DFF
}

a:hover {
  text-decoration:underline;
  color:#575A5C;
  transition: 300ms;
}

img {
  border: 0;
}

table {
  border:0px;
  border-collapse:collapse;
}

h1 {
  font-size:1.4em;
  color:#575A5C;
}

h2 {
  font-size:1.2em;
  color:#575A5C;
}

h3 {
  font-size:1.1em;
  color:#575A5C;
}

h3 a {
  font-size:1.1em;
  color:#575A5C;
}

hr {
  margin:auto auto;
  border:1px solid #575A5C;
  border-bottom:none;
  padding-left:50px;
  max-width:90%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 100px;
}

.centered {
	max-width:1000px;
  margin: auto auto;
}
</style>

<style src='normalize.css'>
</style>
