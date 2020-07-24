<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" />
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-num"><span class="iconfont img-icon">&#xe61e;</span>{{this.galleryImgs.length}}</div>
            </div>
        </div>
        <fade-animation>
            <common-gallery :imgs="galleryImgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/animation/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height : 0
    padding-bottom: 55%
    .banner-img
        width: 100%
    .banner-info
        position :absolute
        left :0
        right:0
        bottom: 0
        line-height : .6rem
        display :flex
        color :#fff
        background : linear-gradient(top,rgba(0, 0, 0, 0),rgba(0, 0, 0, .8))
        .banner-title
            flex :1
            padding-left: .2rem
            font-size:.32rem
        .banner-num
            padding: 0 .3rem
            height : .36rem
            line-height : .36rem
            border-radius: .2rem
            background : rgba(0, 0, 0, .8)
            margin-right:.2rem
            margin-top: .12rem
            color : #ccc
            .img-icon
                font-size:.28rem
                margin-right :.1rem
</style>
