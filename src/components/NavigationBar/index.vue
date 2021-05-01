<template>
  <div id="nav">
    <div class="centered">
      <span id="sitename">WALDO URRIBARRI</span>
      <router-link to="/">
        HOME
      </router-link>
      <router-link to="/projects">
        PROJECTS
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data: function() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import "@/scss/palette.scss";

#nav {
  padding: 24px;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	box-shadow: 0px 0px 8px $color-background-shadow-light;
  margin-bottom: 16px;
}

#nav a {
  margin-left: 16px;
  padding: 8px;
	font-style: normal;
	color: $color-white;
	font-size: 1em;
	font-weight: normal;
  border: 1px;
	box-shadow:
		4px 4px 4px $color-background-shadow,
		-4px -4px 4px $color-background-shadow-light;
    border-radius: 4px;
}

#nav a:link {
  text-decoration: none;
  color: $color-primary;
}

#nav a:visited {
  text-decoration: none;
  color: $color-primary;
}

#nav a:active {
  text-decoration: none;
  color: $color-primary;
}

#nav a:hover {
  text-decoration: underline;
  color: $color-white;
  transition: 300ms;
}

#nav a.router-link-exact-active {
  color: $color-white;
}

#sitename {
  font-weight: bold;
}
</style>