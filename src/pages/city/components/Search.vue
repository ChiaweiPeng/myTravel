<template>
  <div>
    <div class="search-area">
        <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li v-for="item of list" :key="item.id" class="search-item border-bottom">{{item.name}}</li>
        <li class="search-item border-bottom" v-if="hasNoData">没有匹配的数据</li>
      </ul>
    </div>
   </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
   .search-area
        background :$bgColor
        text-align :center
        padding: .1rem .3rem
        .search-input
            height :.5rem
            width :100%
            border-radius:.1rem
            text-align :center
            color:#666
            padding : 0 .2rem
            box-sizing:border-box
    .search-content
        z-index :1
        overflow: hidden
        position:absolute
        top:1.58rem
        right :0
        left:0
        bottom :0
        background : #eee
        .search-item
            line-height: .8rem
            background : #fff
            padding-left: .2rem
        .border-bottom
            &:before
                border-color:#ddd
            &:after
                border-color: #ddd
</style>
