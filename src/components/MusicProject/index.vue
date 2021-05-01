<template>
  <div class="project">
    <div class="project-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="project-description">
      <p v-html="description" />
    </div>
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
</style>
