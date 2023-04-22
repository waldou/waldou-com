<template>
  <div id="music-view" class="centered">
    <div id="video-frame" v-if="featuredVideo">
      <iframe
        width="100%" height="320" :src="'https://www.youtube.com/embed/' + featuredVideo" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
      />
    </div>
    <div id="content">
      <h3>{{ $t('music.subtitle') }}</h3>
      <div id="links">
        <a href="https://www.youtube.com/@WaldouPM?sub_confirmation=1">YouTube</a>
        <a href="https://www.instagram.com/waldoupm/">Instagram</a>
        <a href="https://www.tiktok.com/@waldoupm/">TikTok</a>
        <a href="https://twitter.com/waldoupm">Twitter</a>
      </div>
    </div>
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
    color: $color-music-four;
    text-shadow: none;
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

#links {
    background-color: $color-music-two;
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
    display: block;
    height: 56px;
    line-height: 56px;
    border-bottom: 1px solid $color-music-one;
    box-shadow: inset 0 0px 9px 0 $color-music-five-alpha;
}
</style>