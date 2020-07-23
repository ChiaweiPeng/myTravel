<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" />
            <div class="banner-info">
                <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
                <div class="banner-num"><span class="iconfont img-icon">&#xe61e;</span>39</div>
            </div>
        </div>
        <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg'
      ]
    }
  },
  components: {
    CommonGallery
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
