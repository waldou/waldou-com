<template>
  <div class="centered">
    <div v-if="updatedAt" class="myGithub">
      <span>My <a href="https://github.com/waldou">Github</a> was last updated {{ formattedDate }}</span>
    </div>
    <div v-else class="myGithub">
      <span>My <a href="https://github.com/waldou">Github</a></span>
    </div>
    <div />
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'MyGithub',
  components: {
  },
  data: function() {
    return {
      updatedAt: ''
    }
  },
  mounted: function() {
    this.getGithubData()
      .then(response => {
        this.updatedAt = response.data.updated_at
      })
  },
  computed:{
    formattedDate: function() {
      const m = moment(this.updatedAt)
      return m.format('[on] YYYY-MM-DD [at] HH:mm:ss')
    }
  },
  methods: {
    getGithubData: function() {
      return axios.get('https://api.github.com/users/waldou', {
        headers: {
          Accept: 'application/json'
        }
      })
    }
  }
}
</script>

<style scoped>
.centered {
  margin: 10px;
  padding: 10px;
	box-shadow:
		5px 5px 5px #575A5C20,
		-5px -5px 5px #FFFFFFFF;
	border-radius: 5px;
}
</style>
