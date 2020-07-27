<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="list-area">
            <div class="list-title border-topbottom">您的位置</div>
            <div class="choose-area">
                <button class="list-btn">{{this.currentCity}}</button>
            </div>
        </div>
        <div class="list-area">
            <div class="list-title border-topbottom">热门城市</div>
            <div class="choose-area">
                <button
                class="list-btn"
                v-for="item of hotCities"
                :key="item.id"
                @click="handleCityClick(item.name)"
                >{{item.name}}</button>
            </div>
        </div>
        <div class="list-area" v-for="(item,key) of cities" :key="key" :ref="key">
            <div class="list-title border-topbottom">{{key}}</div>
            <div class="choose-area-lines">
                <div
                class="list-lines border-topbottom"
                v-for="innerItem of item"
                :key="innerItem.id"
                @click="handleCityClick(innerItem.name)"
                >
                {{innerItem.name}}
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      this.cityChange(city)
      this.$router.push('/')
    },
    ...mapMutations(['cityChange'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper,{
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        overflow:hidden
        position:absolute
        top : 1.58rem
        bottom :0
        left:0
        right:0
        .border-topbottom
            &:before
                border-color:#ddd
            &:after
                border-color:#ddd
        .list-title
            line-height : .5rem
            background : #eee
            padding-left : .2rem
            color:#666
        .choose-area
            padding : .25rem .6rem 0 .2rem
            .list-btn
                padding: .04rem .7rem
                border-radius:.08rem
                background : #fff
                border : 1px solid #999
                margin-left : .1rem
                margin-bottom: .25rem
        .list-lines
            line-height : .76rem
            padding-left: .2rem

</style>
