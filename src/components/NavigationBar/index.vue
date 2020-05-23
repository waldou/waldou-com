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

<style scoped>
#nav {
    padding: 30px;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	box-shadow: 0px 0px 10px #575A5C20;
    margin-bottom: 20px;
}

#nav a {
    margin-left:20px;
    padding: 10px;
	font-style:normal;
	color:#1C9DFF;
	font-size:1em;
	font-weight:normal;
    border: 1px;
	box-shadow:
		5px 5px 5px #575A5C20,
		-5px -5px 5px #FFFFFFFF;
    border-radius: 5px;
}

#nav a:link {
    text-decoration: none;
    color:#1C9DFF;
}

#nav a:visited {
    text-decoration: none;
    color:#1C9DFF;
}

#nav a:active {
    text-decoration: none;
    color:#1C9DFF;
}

#nav a:hover {
    text-decoration: underline;
    color:#575A5C;
    transition: 300ms;
}

#nav a.router-link-exact-active {
    color: #575A5C;
}

#sitename {
  font-weight: bold;
}
</style>