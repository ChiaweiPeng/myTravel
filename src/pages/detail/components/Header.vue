<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs"><span class="iconfont abs-back-icon">&#xe658;</span></router-link>
    <router-link
    tag="div"
    to="/"
    class="header-fixed"
    v-show="!showAbs"
    :style="opacityStyle"
    ><span class="iconfont fixed-back-icon">&#xe658;</span>景点详情</router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 60) {
        this.showAbs = false
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    position absolute
    top .1rem
    left .1rem
    background rgba(0, 0, 0, .8)
    width .8rem
    height .8rem
    line-height  .8rem
    border-radius .4rem
    color #fff
    text-align center
    .abs-back-icon
        font-size .4rem
.header-fixed
    position fixed
    top 0
    left 0
    width 100%
    height : $headerHeight
    line-height: $headerHeight
    text-align :center
    color :#fff
    font-size : .32rem
    background : $bgColor
    .fixed-back-icon
        position :absolute
        left: .2rem
        top:0
        font-size : .5rem
</style>
