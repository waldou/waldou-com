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
    <div class="clear" />
  </div>
</template>

<script>
import axios from 'axios'
import MyGithub from '@/components/MyGithub'
import Application from '@/components/ApplicationProject'
import Game from '@/components/GameProject'
import Music from '@/components/MusicProject'
import i18n from '@/i18n'

const emptyData = { data: []}

export default {
  name: 'ProjectsComponent',
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
      if(!i18n.locale) {
        return emptyData
      }
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
  padding: 8px;
}

.projectsDesktop {
  display: block;
}

.projectsMobile {
  display: none;
  box-sizing: border-box;
  float: none;
  clear: both;
  width: 100%;
  padding: 8px;
}

.clear {
  float: none;
  clear: both;
}

@media (max-width: 768px) {
	.projectsDesktop {
    display: none;
  }
	.projectsMobile {
    display: block;
  }
}
</style>

<style lang="scss">
@import "@/scss/palette.scss";

.project {
	padding: 16px 16px 1px 16px;
  background-image: url("../assets/wood.jpg");
  background-size: contain;
	background-color: $color-background;
	box-shadow:
		4px 4px 4px $color-background-shadow,
		-4px -4px 4px $color-background-shadow-light;
	border-radius: 4px;
}

.project-title {
  margin: 0px 0px 16px 0px;
  padding: 4px 16px 4px 16px;
  -moz-box-shadow: inset 0 0 16px $color-black;
  -webkit-box-shadow: inset 0 0 16px $color-black;
  box-shadow: inset 0 0 16px $color-black;
}

.project-media {
  margin: 0px 0px 16px 0px;
  padding: 4px;
  -moz-box-shadow: inset 0 0 16px $color-black;
  -webkit-box-shadow: inset 0 0 16px $color-black;
  box-shadow: inset 0 0 16px $color-black;
}

.project-media img {
  width: 100%;
  padding: 0px;
  margin: 0px;
}

.project-description {
  margin: 0px 0px 16px 0px;
  padding: 4px 16px 4px 16px;
  -moz-box-shadow: inset 0 0 16px $color-black;
  -webkit-box-shadow: inset 0 0 16px $color-black;
  box-shadow: inset 0 0 16px $color-black;
}
</style>
