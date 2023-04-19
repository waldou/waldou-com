<template>
  <div class="centered">
    <div class="about">
      <section id="about-me">
        <h1>{{ $t('about.sectionTitle') }}</h1>
        <div class="infotxt">
          <p v-html="$t('about.paragraphOne')" />
          <p>{{ $t('about.paragraphTwo', { as400Age: yearCount('2010-09-08', '2014-06-09'), webAge: yearCount('2011-08-01'), androidAge: yearCount('2012-07-01', '2022-05-01') }) }}</p>
          <p v-html="$t('about.paragraphThree', { ytAge: yearCount('2022-02-25') })" />
        </div>
      </section>
      <br>
      <section id="cv">
        <h1>{{ $t('resume.sectionTitle') }}</h1>
        <div class="infotxt" style="text-align:left;">
          <span v-for="line in $t('resume.content')" :key="line">
            <span v-html="line" /><br>
          </span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import utils from '../utils'

export default {
  name: 'AboutView',
  components: {
  },
  data: function() {
    return {}
  },
  methods: {
    yearCount: function(strStart, strStop) {
      return utils.yearCount(strStart, strStop)
    }
  },
}
</script>

<style scoped>
header {
  text-align: center;
}

header img {
  max-width: 100%;
}

.centered {
  padding-left: 16px;
  padding-right: 16px;
}
</style>