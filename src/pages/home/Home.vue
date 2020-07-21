<template>
    <div>
        <home-header :city="city"></home-header>
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
export default{
  name: 'Home',
  data () {
    return {
      city: '',
      swiperList: [],
      iconsList: [],
      recLists: [],
      qnrLists: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.recLists = data.recLists
        this.qnrLists = data.qnrLists
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
