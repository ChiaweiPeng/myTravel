<template>
  <div class="list-container">
    <div class="detail-list-com">
      <div class="area-title">去哪儿推荐</div>
      <div class="area-list">
          <div class="area-list-item" v-for="item of recomList" :key="item.id">
            <div class="item-info">
               <div class="list-item-title">{{item.recTitle}}</div>
               <ul class="item-tips" v-if="item.recTips">
                 <li class="item-ding" v-if="item.recTips.Ding"><span class="time-icon iconfont">&#xe605;</span>可订明日</li>
                 <li class="item-tui"  v-if="item.recTips.Tui">随时退</li>
               </ul>
            </div>
            <div class="price-area">
              <span class="item-price">￥{{item.recPrice}}</span>
              <button class="item-yd">立即预订</button>
            </div>
          </div>
      </div>
    </div>

    <div class="detail-list-com">
      <div class="area-title">景区门票</div>
      <div class="area-title-fu"><span class="fu-border"></span>{{this.titleTitle}}</div>
      <div class="tickets-container">
        <div class="tickets-type" v-for="item of ticketsList" :key="item.id"  @click="handleClick">
          <div class="tickets-type-title">
            <span class="tickets-name">{{item.ticType}}</span>
            <span class="tickets-price">￥{{item.ticTypePrice}} <span class="qi">起</span> <i class="pull-icon iconfont">&#xe662;</i> </span>
          </div>
          <div class="tickets-area" v-show="showTheTic">
            <div class="area-list-item" v-for="tics of item.ticTypeList" :key="tics.id">
              <div class="item-info">
                 <div class="list-item-title">{{tics.ticName}}</div>
                 <ul class="item-tips" v-if="tics.ticTips">
                   <li class="item-ding" v-if="tics.ticTips.Ding"><span class="time-icon iconfont">&#xe605;</span>可订明日</li>
                   <li class="item-tui" v-if="tics.ticTips.Tui">随时退</li>
                 </ul>
              </div>
              <div class="price-area">
                <span class="item-price">￥{{tics.ticPrice}}</span>
                <button class="item-yd">立即预订</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-list-com">
      <div class="area-title commit">用户评价</div>
      <div class="commit-container" v-for="item of sightCommit" :key="item.id">
        <div class="commit-info">
          <span class="left-star">{{item.star}}</span>
          <span class="right-info">
            <span class="user-name">{{item.userName}}</span>
            <span class="user-time">{{item.userTime}}</span>
          </span>
        </div>
        <div class="commit-content">
          {{item.comContent}}
        </div>
        <div class="commit-imgs">
          <div class="imgs-container" v-for="imgs of item.comImgs" :key="imgs.id"><img class="user-img" :src="imgs.imgUrl"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    recomList: Array,
    titleTitle: String,
    ticketsList: Array,
    sightCommit: Array
  },
  data () {
    return {
      showTheTic: false
    }
  },
  methods: {
    handleClick (e) {
      let tics = e.currentTarget.querySelector('.tickets-area')
      tics.style.display = tics.style.display === 'block' ? 'none' : 'block'
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
 @import '~styles/tickets.styl'
 @import '~styles/detailTitle.styl'
 .border-bottom
    &:before
        border-color: #999
.list-container
  background #f5f5f5
  .detail-list-com
    padding  .4rem .2rem
    margin-bottom .2rem
    background #fff
    .area-title
      detailTitle()
    .area-title-fu
      font-size .32rem
      font-weight bolder
      margin-bottom .35rem
      .fu-border
        display inline-block
        background-image: linear-gradient(126deg,#00e0ca 0,#00bfd4 100%);
        border-radius: .06rem;
        height: .24rem;
        min-width: .08rem;
        margin-right: .12rem;
    .area-list
      background #f5f5f5
      padding 0 .2rem
      border-radius .2rem
      .area-list-item
        ticket()
      .area-list-item:first-child
        border-top none
    .tickets-container
      border: 1px solid #e0e0e0;
      border-radius .2rem
      box-shadow 1px 1px 6px #e0e0e0
      .tickets-type
        border-bottom 1px solid #e0e0e0
        margin  0 .2rem
        box-sizing border-box
        .tickets-type-title
          line-height 1rem
          padding 0 .2rem
          display flex
          .tickets-name
            flex 1
            font-size .32rem
          .tickets-price
            color $priceColor
            font-size .38rem
            .qi
              font-size .2rem
        .tickets-area
          background #f5f5f5
          border-radius .2rem
          padding  0 .2rem
          margin-bottom .5rem
          .area-list-item
            ticket()
          .area-list-item:first-child
            border-top none
  .commit
    border-bottom 1px solid #eaeaea
  .commit-container
    padding .3rem 0
    border-bottom 1px solid #eaeaea
    line-height .4rem
  .commit-info
    display flex
    justify-content space-between
    margin-bottom .2rem
    .right-info
      font-size .24rem
      color #999
  .commit-imgs
    display flex
    justify-content space-evenly
    margin-top .3rem
    .imgs-container
      width: 33.33%
      margin-bottom .1rem
      margin-left: .07rem;
      margin-right: .07rem;
      .user-img
        width 100%
</style>
