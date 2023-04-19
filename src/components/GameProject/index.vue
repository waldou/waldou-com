<template>
  <div class="project">
    <div class="project-title">
      <h2 v-if="link">
        <a :href="link">{{ title }}<span v-if="year"> ({{ year }})</span></a>
      </h2>
      <h2 v-else>
        {{ title }}<span v-if="year"> ({{ year }})</span>
      </h2>
    </div>
    <div v-if="media" v-html="media" class="project-media" />
    <div class="project-description">
      <p v-if="type">
        {{ $t('projects.type') }} {{ $t('projects.types')[type] }}
      </p>
      <p v-if="platform">
        {{ $t('projects.platform') }} {{ $t('projects.platforms')[platform] }}
      </p>
      <p v-if="description" v-html="description" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameProject',
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
</style>
