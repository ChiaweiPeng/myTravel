<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <li class="rec-container border-bottom" v-for="item of recLists" :key="item.id">
                <img class="rec-img" :src="item.imgUrl" />
                <div class="rec-info">
                    <p class="rec-title">{{item.title}}</p>
                    <p class="rec-desc">{{item.desc}}</p>
                    <button class="rec-btn">查看详情</button>
                </div>
            </li>
        </ul>
        <div class="rec-more">查看所有产品</div>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recLists: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        title: '故宫',
        desc: '东方宫殿建筑代表，世界宫殿建筑典范'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
        title: '南山滑雪场',
        desc: '北京专业级滑雪圣地'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg',
        title: '天安门广场',
        desc: '我爱北京天安门，天安门上太阳升'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg',
        title: '水立方',
        desc: '中国的荣耀，阳光下的晶莹水滴'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg',
        title: '温都水城养生馆',
        desc: '各种亚热带植物掩映其间仿佛置身热带雨林'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .title
        line-height : .8rem
        background : #eee
        padding-left:.3rem
        color :$darkText
        font-weight:bold
    .rec-container
        display : flex
        padding :.15rem
        .rec-img
            width: 1.7rem
            height: 1.7rem
        .rec-info
            margin-left: .2rem
            flex :1
            min-width:0
            .rec-title
                font-size: .3rem
                font-weight: bold
                margin-bottom: .2rem
                color: $darkText
                ellipsis()
            .rec-desc
                color: #999
                ellipsis()
            .rec-btn
                margin-top : .4rem
                background : #ff9300
                color :#fff
                padding : 0 .2rem
                border-radius: .1rem
                font-size:.26rem
    .rec-more
        line-height:.8rem
        text-align :center
        color: $blueText
        font-weight:bold
</style>
