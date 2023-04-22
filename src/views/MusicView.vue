<template>
  <div>
    <div id="music-view" class="centered">
      <div id="video-frame" v-if="featuredVideo">
        <iframe
          width="100%" height="320" :src="'https://www.youtube.com/embed/' + featuredVideo" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
        />
      </div>
      <div id="content">
        <div id="waldoupm-logo-container">
          <img src="../../public/img/waldoupm-logo.png" alt="WaldouPM Logo">
          <p class="bold">
            {{ $t('music.subtitle') }}
          </p>
        </div>
        <div id="links">
          <a href="https://open.spotify.com/artist/7b8O7AbOkZIZi2yEi2aLxy"><img src="../../public/img/logos/logo_spotify.svg"></a>
          <a href="https://music.apple.com/us/artist/waldou-pm/1634842783"><img src="../../public/img/logos/logo_applemusic.svg"></a>
          <a href="https://www.deezer.com/es/artist/176688697"><img src="../../public/img/logos/logo_deezer.svg"></a>
          <a href="https://www.amazon.com/music/player/artists/B0B6PZQF52/waldou-pm"><img src="../../public/img/logos/logo_amazonmusic.svg"></a>
          <a href="https://listen.tidal.com/artist/33262814"><img src="../../public/img/logos/logo_tidal.svg"></a>
          <a href="https://www.youtube.com/@WaldouPM?sub_confirmation=1"><img src="../../public/img/logos/logo_youtube.svg"></a>
          <a href="https://music.youtube.com/channel/UCAz8dwQ4vt2-78tbyUUR6lQ"><img src="../../public/img/logos/logo_youtubemusic.svg"></a>
        </div>
      </div>
    </div>
    <br><br>
  </div>
</template>

<script>
import youtubeApi from '@/api/youtube'

export default {
  name: 'MusicView',
  components: {
  },
  data: function() {
    return {
      youtubeInfo: null
    }
  },
  mounted: function() {
    this.getYoutubeVideos()
      .then(response => this.youtubeInfo = response)
  },
  computed:{
    featuredVideo: function() {
      if(this.youtubeInfo) {
        const { items } = this.youtubeInfo
        const video = items.filter(item => !item.snippet.title.includes('#shorts'))
        if(video.length) {
          return video[0].id.videoId
        } else {
          return items[0].id.videoId
        }
      } else {
        return null
      }
    }
  },
  methods: {
    getYoutubeVideos: function() {
      return youtubeApi.getLastTwoVideos()
    }
  }
}
</script>

<style lang="scss">
@charset "utf-8";
@import "@/scss/palette.scss";
@import url('https://fonts.googleapis.com/css2?family=Carlito:wght@400;700&display=swap');
body {
    background-color: $color-music-one;
    font-family: 'Carlito', sans-serif;
    color: $color-music-one;
    text-shadow: none;
    background-image: url('../../public/img/music-background.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}
h3 {
  color: $color-music-four;
  text-shadow: none;
}
</style>

<style lang="scss" scoped>
@charset "utf-8";
@import "@/scss/palette.scss";

.centered {
    max-width: 320px;
    background-color: $color-white;
}

#content {
    text-align: center;
}

.bold {
  font-weight: bold;
}

#waldoupm-logo-container {
  padding: 8px;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#waldoupm-logo-container img {
  width: 50%;
}

#waldoupm-logo-container p {
  padding: 0px;
  margin: 0px;
}

#links {
    background-color: $color-music-two;
}

#links img {
    max-width: 50%;
}

a:link {
  text-decoration: none;
  color: $color-music-five;
}

a:visited {
  text-decoration: none;
  color: $color-music-five;
}

a:active {
  text-decoration: none;
  color: $color-music-four;
  background-color: $color-music-three;
}

a:hover {
  text-decoration:none;
  color: $color-music-four;
  background-color: $color-music-three;
  transition: 300ms;
}

#links a {
    font-size: 20px;
    display: flex;
    height: 56px;
    line-height: 56px;
    border-bottom: 1px solid $color-music-one;
    box-shadow: inset 0 0px 9px 0 $color-music-five-alpha;
    padding: 8px;
    align-self: center;
    justify-content: center;
}
</style>