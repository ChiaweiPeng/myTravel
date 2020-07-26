<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" />
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-num"><span class="iconfont img-icon">&#xe61e;</span>{{this.galleryImgs.length}}</div>
            </div>
        </div>
         <div class="banner-map">
              <div class="map-info">
                <div class="sight-score">
                  <div class="sight-score-info">
                      <div class="sight-score-score"><span class="score-num"> {{ this.scoreNum }} </span>分 超赞</div>
                      <div class="sight-coms"><span class="coms-num">{{this.comsNum}}</span>条评论 <span class="gl-num">{{this.glNum}}</span>条攻略</div>
                  </div>
                  <span class="small-arrow iconfont">&#xe612;</span>
                </div>

                <div class="sight-intro">
                  <div class="sight-intro-info">
                  景点简介
                  <div class="sight-coms">开放时间、贴士</div>
                  </div>
                  <span class="small-arrow iconfont">&#xe612;</span>
                </div>
              </div>
              <div class="map-pos"><span class="map-icon iconfont">&#xe62b;</span>{{this.mapPos}}<span class="small-arrow iconfont">&#xe612;</span></div>
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
    galleryImgs: Array,
    scoreNum: Number,
    comsNum: Number,
    glNum: Number,
    mapPos: String
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
        bottom: .1rem
        line-height : .6rem
        display :flex
        color :#fff
        background : linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, .8))
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
.banner-map
    background  #fff
    border-radius .1rem
    position relative
    top -.1rem
    padding .2rem
    padding-bottom .1rem
    margin-bottom .1rem
    .map-info
        display grid
        grid-template-columns repeat(2,1fr)
        .sight-score
            display flex
            justify-content space-between
            border-right 1px #ccc solid
            height 1rem
            padding-right .2rem
            .sight-score-score
                color #ff8c12
                .score-num
                  font-size .4rem
          .sight-coms
              margin-top .2rem
              color #999
              font-size .25rem
            .small-arrow
                line-height 1rem
                color #999
        .sight-intro
            display  flex
            justify-content space-between
            height 1rem
            padding-left  .2rem
            .sight-intro-info
              margin-top .1rem
    .map-pos
      line-height .5rem
      margin-top .3rem
      .map-icon
        margin .2rem
      .small-arrow
        float right
        color  #999
</style>
