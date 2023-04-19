<template>
  <div class="centered">
    <div v-if="updatedAt" class="myGithub">
      <span v-html="$t('github.loaded', { formattedDate })" />
    </div>
    <div v-else class="myGithub">
      <span v-html="$t('github.notloaded')" />
    </div>
    <div />
  </div>
</template>

<script>
import moment from 'moment'
import githubApi from '@/api/github'

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
      return m.format(this.$t('github.dateFormat'))
    }
  },
  methods: {
    getGithubData: function() {
      return githubApi.getUserInfo()
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/palette.scss";

.centered {
  margin: 8px;
  padding: 8px;
	box-shadow:
		4px 4px 4px $color-background-shadow,
		-4px -4px 4px $color-background-shadow-light;
	border-radius: 4px;
}
</style>
