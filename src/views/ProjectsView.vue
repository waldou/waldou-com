<template>
  <div>
    <NavigationBar />
    <ProjectsComponent class="projects" />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import ProjectsComponent from '@/components/ProjectsComponent.vue'

export default {
  name: 'ProjectsView',
  components: {
    NavigationBar,
    ProjectsComponent
  },
  data: function() {
    return {}
  },
}
</script>
