<template>
  <div class="project">
    <h2>{{ title }}</h2>
    <p v-html="description" />
    <div v-if="media" v-html="media" class="project-media" />
  </div>
</template>

<script>
export default {
  name: 'MusicProject',
  props: {
    title: { type: String, required: true, default: '' },
    description: { type: String, required: true, default: '' },
    media: { type: String, required: false, default: '' },
  },
  data: function() {
    return {}
  },
}
</script>

<style scoped>
.project {
	padding:1px 20px 20px 20px;
	background-color:#F5F5F5;
	box-shadow:
		5px 5px 5px #575A5C20,
		-5px -5px 5px #FFFFFFFF;
	border-radius: 5px;
}
</style>
