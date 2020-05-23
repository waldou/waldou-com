<template>
  <div class="centered">
    <MyGithub />
    <div v-if="projectsData" class="projectsDesktop">
      <div class="projectColumn">
        <div v-for="project in oddProjects" :key="`${project.title}`" class="projectWrapper">
          <Application
            v-if="project.type == 'Application'"
            :title="project.title"
            :year="project.year"
            :type="project.type"
            :platform="project.platform"
            :description="project.description"
            :media="project.media"
            :link="project.link"
          />
          <Game
            v-if="project.type == 'Game'"
            :title="project.title"
            :year="project.year"
            :type="project.type"
            :platform="project.platform"
            :description="project.description"
            :media="project.media"
            :link="project.link"
          />
          <Music
            v-if="project.type == 'Music'"
            :title="project.title"
            :description="project.description"
            :media="project.media"
          />
        </div>
      </div>
      <div class="projectColumn">
        <div v-for="project in pairProjects" :key="`${project.title}`" class="projectWrapper">
          <Application
            v-if="project.type == 'Application'"
            :title="project.title"
            :year="project.year"
            :type="project.type"
            :platform="project.platform"
            :description="project.description"
            :media="project.media"
            :link="project.link"
          />
          <Game
            v-if="project.type == 'Game'"
            :title="project.title"
            :year="project.year"
            :type="project.type"
            :platform="project.platform"
            :description="project.description"
            :media="project.media"
            :link="project.link"
          />
          <Music
            v-if="project.type == 'Music'"
            :title="project.title"
            :description="project.description"
            :media="project.media"
          />
        </div>
      </div>
    </div>
    <div v-if="projectsData" class="projectsMobile">
      <div v-for="project in projectsData" :key="`${project.title}`" class="projectWrapper">
        <Application
          v-if="project.type == 'Application'"
          :title="project.title"
          :year="project.year"
          :type="project.type"
          :platform="project.platform"
          :description="project.description"
          :media="project.media"
          :link="project.link"
        />
        <Game
          v-if="project.type == 'Game'"
          :title="project.title"
          :year="project.year"
          :type="project.type"
          :platform="project.platform"
          :description="project.description"
          :media="project.media"
          :link="project.link"
        />
        <Music
          v-if="project.type == 'Music'"
          :title="project.title"
          :description="project.description"
          :media="project.media"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MyGithub from '@/components/MyGithub'
import Application from '@/components/ApplicationProject'
import Game from '@/components/GameProject'
import Music from '@/components/MusicProject'

export default {
  name: 'Projects',
  props: {
    projects: { type: Object, required: false, default() {
      return { data: []}
    } },
  },
  components: {
    MyGithub,
    Application,
    Game,
    Music,
  },
  data() {
    return { projectsData: this.projects.data }
  },
  mounted() {
    this.getProjects()
      .then(response => {
        this.projectsData = response.data.data
      })
  },
  computed:{
    pairProjects: function() {
      const projects = []
      this.projectsData.forEach((item, index) => {
        if((index+1) % 2 == 0) {
          projects.push(item)
        }
      })
      return projects
    },
    oddProjects: function() {
      const projects = []
      this.projectsData.forEach((item, index) => {
        if((index+1) % 2 != 0) {
          projects.push(item)
        }
      })
      return projects
    }
  },
  methods: {
    getProjects() {
      return axios.get('data/projects.json', {
        headers: {
          Accept: 'application/json',
        },
      })
    },
  },
}
</script>

<style scoped>
.projectColumn {
  float: left;
  width: 50%;
}

.projectWrapper {
  box-sizing: border-box;
  padding: 10px;
}

.projectsDesktop {
  display: block;
}

.projectsMobile {
  display: none;
  box-sizing: border-box;
  float:none;
  clear:both;
  width:100%;
  padding: 10px;
}

@media (max-width: 960px) {
	.projectsDesktop {
    display: none;
  }
	.projectsMobile {
    display: block;
  }
}
</style>
