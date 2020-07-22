<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconsList="iconsList"></home-icons>
        <home-recommend :recLists="recLists"></home-recommend>
        <home-weekend :qnrLists="qnrLists"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default{
  name: 'Home',
  data () {
    return {
      swiperList: [],
      iconsList: [],
      recLists: [],
      qnrLists: [],
      lasyCity: ''
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.recLists = data.recLists
        this.qnrLists = data.qnrLists
      }
    }
  },
  mounted () {
    this.lasyCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lasyCity !== this.city) {
      this.lasyCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
