<template>
  <div class="centered">
    <div class="about">
      <header id="about-pic">
        <br>
        <img src="img/waldo-pixel-banner.png" alt="Waldou"><br>
        <br>
      </header>

      <section id="about-me">
        <h1>About Me</h1>
        <div class="infotxt">
          <p>Hi! I'm Waldo Urribarri, a {{ yearCount('1988-03-17') }} years old computer programmer from Maracaibo, Venezuela living in Santiago, Chile. I have {{ yearCount('2010-09-08', '2014-06-09') }}+ years of experience developing for the IBM iSeries platform, {{ yearCount('2011-08-01') }}+ years developing for the web, as well as {{ yearCount('2012-07-01') }}+ years developing for the Android platform.</p>
          <p>I'm also a former musician of various bands, and I've also composed music for videogames.</p>
          <p>I love learning technologies, APIs, and programming tricks, that is why I also enjoy writing small articles about different subjects, mainly technology, showing some things that I may be currently learning.</p>
        </div>
      </section>
      <br>
      <section id="cv">
        <h1>Resume</h1>
        <div class="infotxt" style="text-align:left;">
          <p>
            <span class="hltxt">Education:</span> BSc in Computer Engineering [2010].<br>
            <span class="hltxt">Languages:</span> Spanish [Native] and English [Advanced].<br>
            <span class="hltxt">Skills:</span> Android SDK, CSS3, HTML, Java, Javascript, JEE, jQuery, MySQL, PHP, RPGLE.<br>
            <span class="hltxt">Experience:</span><br>
            - Senior Software Engineer at Principal Financial Group [2018-Present]<br>
            - Software Engineer at IGT Global Solutions Corporation Chile [2014-2018]<br>
            - Android Programmer at Thingy [2012-2015]<br>
            - AS400 Systems Analyst at Banco Occidental de Descuento [2010-2014]<br><br>
            For a detailed overview on my skills and experience please check my <a class="infotxt" href="https://linkedin.com/in/waldou">LinkedIn Profile</a>.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import utils from '../utils'

export default {
  name: 'About',
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
  padding-left: 20px;
  padding-right: 20px;
}
</style>