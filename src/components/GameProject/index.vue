<template>
  <div class="project">
    <h2 v-if="link">
      <a :href="link">{{ title }}<span v-if="year"> ({{ year }})</span></a>
    </h2>
    <h2 v-else>
      {{ title }}<span v-if="year"> ({{ year }})</span>
    </h2>
    <div v-if="media" v-html="media" class="project-media" />
    <p v-if="type">
      Type: {{ type }}
    </p>
    <p v-if="platform">
      Platform: {{ platform }}
    </p>
    <p v-if="description" v-html="description" />
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    title: { type: String, required: true, default: '' },
    year: { type: String, required: false, default: '' },
    type: { type: String, required: false, default: '' },
    platform: { type: String, required: false, default: '' },
    description: { type: String, required: true, default: '' },
    media: { type: String, required: false, default: '' },
    link: { type: String, required: false, default: '' },
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

<style>
.quoted-text {
	font-style: italic;
}
</style>
