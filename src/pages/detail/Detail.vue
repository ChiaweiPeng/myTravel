<template>
  <div class="container">
    <detail-banner
    :sightName="sightName"
    :bannerImg="bannerImg"
    :galleryImgs="galleryImgs"
    :scoreNum="scoreNum"
    :comsNum="comsNum"
    :glNum="glNum"
    :mapPos="mapPos"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list
    :recomList="recomList"
    :titleTitle="titleTitle"
    :ticketsList="ticketsList"
    :sightCommit="sightCommit"
    ></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      scoreNum: 0,
      comsNum: 0,
      glNum: 0,
      mapPos: '',
      recomList: [],
      titleTitle: '',
      ticketsList: [],
      sightCommit: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.handleDetailSucc)
    },
    handleDetailSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        // this.categoryList = data.categoryList
        this.scoreNum = parseFloat(data.scoreNum)
        this.comsNum = data.comsNum
        this.glNum = data.glNum
        this.mapPos = data.mapPos
        this.recomList = data.recomList
        this.titleTitle = data.titleTitle
        this.ticketsList = data.ticketsList
        this.sightCommit = data.sightCommit
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.container
  background #f5
</style>
