<template>
    <div class="container">
        <router-link tag="div" :to="'/detail/' + item.id" class="list-item" v-for="item of list" :key="item.id">
            <div class="item-info">
                <img class="sight-img" :src="item.sightImg" />
                <div class="sight-info">
                    <div class="sight-title">{{item.sightName}}</div>
                    <div class="sight-com">
                        <span class="sight-star">{{item.scoreNum}}分 </span>
                        <span class="com-num">{{item.comsNum}}条评论</span>
                    </div>
                    <div class="sight-price">
                        <span><span class="price">￥{{item.price}}</span> 起</span>
                        <span class="pos">{{item.mapPos}}</span>
                    </div>
                    <div class="tag-list">
                        <span class="sight-tag" v-for="(tags,index) of item.sightTags" :key="index">{{tags}}</span>
                    </div>
                </div>
            </div>
            <div class="item-ticket">
                <div class="ticket-line" v-for="tics of item.ticketList" :key="tics.id">
                    <span class="ticket-info">{{tics.ticName}}</span>
                    <span class="ticket-price">￥{{tics.ticPrice}}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'SightTicketList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.container
  background #f2f2f2
  padding-bottom .2rem
  .list-item
    background #fff
    padding .2rem
    margin-bottom .2rem
    .item-info
      display flex
      padding-bottom .2rem
      border-bottom 1px solid #eee
      .sight-img
        height 2rem
        width 2rem
      .sight-info
        flex 1
        padding-left .2rem
        .sight-title
          font-size .32rem
        .sight-com
          margin-top .2rem
          color $shallowText
        .sight-price
          margin-top .2rem
          display flex
          justify-content space-between
          font-size .25rem
          color $shallowText
          .price
            color $priceColor
            font-size .4rem
        .tag-list
          margin-top .2rem
          .sight-tag
            color $blueText
            font-size .2rem
            font-size .2rem
            border 1px solid #ddd
            display inline-block
            line-height .3rem
            margin-right .1rem
  .ticket-line
    line-height .89rem
    border-bottom 1px solid #eee
    color $shallowText
    display flex
    justify-content space-between
    .ticket-price
      color $priceColor
  .ticket-line:last-child
    border-bottom none
</style>
