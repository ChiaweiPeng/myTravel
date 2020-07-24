<template>
  <div class="list-container">
    <div class="detail-list-com">
      <div class="area-title">去哪儿推荐</div>
      <div class="area-list">
          <div class="area-list-item">
            <div class="item-info">
               <div class="list-item-title">北京故宫大门票+珍宝馆+资深导游讲解（配无线耳麦）*成人票</div>
               <ul class="item-tips">
                 <li class="item-ding"><span class="time-icon iconfont">&#xe605;</span>可订明日</li>
                 <li class="item-tui">随时退</li>
               </ul>
            </div>
            <div class="price-area">
              <span class="item-price">￥119</span>
              <button class="item-yd">立即预订</button>
            </div>
          </div>

           <div class="area-list-item">
            <div class="item-info">
               <div class="list-item-title">北京故宫大门票+珍宝馆+资深导游讲解（配无线耳麦）*成人票</div>
               <ul class="item-tips">
                 <li class="item-ding"><span class="time-icon iconfont">&#xe605;</span>可订明日</li>
                 <li class="item-tui">随时退</li>
               </ul>
            </div>
            <div class="price-area">
              <span class="item-price">￥119</span>
              <button class="item-yd">立即预订</button>
            </div>
          </div>

           <div class="area-list-item">
            <div class="item-info">
               <div class="list-item-title">北京故宫大门票+珍宝馆+资深导游讲解（配无线耳麦）*成人票</div>
               <ul class="item-tips">
                 <li class="item-ding"><span class="time-icon iconfont">&#xe605;</span>可订明日</li>
                 <li class="item-tui">随时退</li>
               </ul>
            </div>
            <div class="price-area">
              <span class="item-price">￥119</span>
              <button class="item-yd">立即预订</button>
            </div>
          </div>
      </div>
    </div>

    <div class="detail-list-com">
      <div class="area-title">景区门票</div>
      <div class="area-title-fu"><span class="fu-border"></span>北京故宫门票</div>
      <div class="tickets-container">
        <div class="tickets-type">
          <div class="tickets-type-title">
            <span class="tickets-name">成人票</span>
            <span class="tickets-price">￥140 <span class="qi">起</span> <i class="pull-icon iconfont">&#xe662;</i> </span>
          </div>
          <div class="tickets-area" v-show="true">
            <div class="area-list-item">
              <div class="item-info">
                 <div class="list-item-title">北京故宫大门票成人票</div>
                 <ul class="item-tips">
                   <li class="item-ding"><span class="time-icon iconfont">&#xe605;</span>可订明日</li>
                   <li class="item-tui">随时退</li>
                 </ul>
              </div>
              <div class="price-area">
                <span class="item-price">￥119</span>
                <button class="item-yd">立即预订</button>
              </div>
            </div>

            <div class="area-list-item">
              <div class="item-info">
                 <div class="list-item-title">北京故宫大门票成人票</div>
                 <ul class="item-tips">
                   <li class="item-ding"><span class="time-icon iconfont">&#xe605;</span>可订明日</li>
                   <li class="item-tui">随时退</li>
                 </ul>
              </div>
              <div class="price-area">
                <span class="item-price">￥119</span>
                <button class="item-yd">立即预订</button>
              </div>
            </div>
          </div>
        </div>

        <div class="tickets-type">
          <div class="tickets-type-title">
            <span class="tickets-name">儿童票</span>
            <span class="tickets-price">￥100 <span class="qi">起</span> <i class="pull-icon iconfont">&#xe662;</i> </span>
          </div>
          <div class="tickets-area" v-show="true">
            <div class="area-list-item">
              <div class="item-info">
                 <div class="list-item-title">北京故宫大门票儿童票</div>
                 <ul class="item-tips">
                   <li class="item-ding"><span class="time-icon iconfont">&#xe605;</span>可订明日</li>
                   <li class="item-tui">随时退</li>
                 </ul>
              </div>
              <div class="price-area">
                <span class="item-price">￥100</span>
                <button class="item-yd">立即预订</button>
              </div>
            </div>
          </div>
        </div>

        <div class="tickets-type">
          <div class="tickets-type-title">
            <span class="tickets-name">特惠票</span>
            <span class="tickets-price">￥99 <span class="qi">起</span> <i class="pull-icon iconfont">&#xe662;</i> </span>
          </div>
          <div class="tickets-area" v-show="true">
            <div class="area-list-item">
              <div class="item-info">
                 <div class="list-item-title">北京故宫特惠票</div>
                 <ul class="item-tips">
                   <li class="item-ding"><span class="time-icon iconfont">&#xe605;</span>可订明日</li>
                   <li class="item-tui">随时退</li>
                 </ul>
              </div>
              <div class="price-area">
                <span class="item-price">￥99</span>
                <button class="item-yd">立即预订</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-list-com">
      <div class="area-title commit">用户评价</div>
      <div class="commit-container">
        <div class="commit-info">
          <span class="left-star">iconfont</span>
          <span class="right-info">
            <span class="user-name">PChiawei</span>
            <span class="user-time">2020-05-27</span>
          </span>
        </div>
        <div class="commit-content">
          北京野生动物园我想说说不同的攻略！！！
          一，门票150，儿童90（一米及3岁以下免费），大众点评买的票138比较合适，我的建议是车放在停车场，不要自驾路线，不要自驾路线，就做门票包含的小火车，非常好，小孩子非常喜欢！！！第一，私家车单收200门票（土豪随意）第二，私家车非常堵，
        </div>
        <div class="commit-imgs">
          <div class="imgs-container"><img class="user-img" src="http://img1.qunarzz.com/piao/fusion/2005/13/c34c9d078ab67902.jpg_228x168_b79936e5.jpg" alt=""></div>
          <div class="imgs-container"><img class="user-img" src="http://img1.qunarzz.com/piao/fusion/2001/88/30ba7655b4291602.jpg_228x168_dd030268.jpg" alt=""></div>
          <div class="imgs-container"><img class="user-img" src="http://img1.qunarzz.com/piao/fusion/2001/62/dd9976a6426f0302.jpg_228x168_21acf68a.jpg" alt=""></div>
        </div>
      </div>

      <div class="commit-container">
        <div class="commit-info">
          <span class="left-star">iconfont</span>
          <span class="right-info">
            <span class="user-name">PChiawei</span>
            <span class="user-time">2020-05-27</span>
          </span>
        </div>
        <div class="commit-content">
          北京野生动物园我想说说不同的攻略！！！
          一，门票150，儿童90（一米及3岁以下免费），大众点评买的票138比较合适，我的建议是车放在停车场，不要自驾路线，不要自驾路线，就做门票包含的小火车，非常好，小孩子非常喜欢！！！第一，私家车单收200门票（土豪随意）第二，私家车非常堵，
        </div>
      </div>
    </div>
    <!-- <div class="detail-list" v-for="(item, index) of list" :key="index">
        <div class="list-title border-bottom"><span class="list-icon"></span>{{item.title}}</div>
        <div v-if="item.children" class="item-children">
          <detail-list :list="item.children"></detail-list>
        </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
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
