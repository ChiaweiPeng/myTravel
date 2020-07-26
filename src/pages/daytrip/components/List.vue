<template>
    <div class="container">
        <div class="list-item" v-for="item of list" :key="item.id">
            <div class="item-info">
                <img class="sight-img" :src="item.sightImg" />
                <div class="sight-info">
                    <div class="sight-title">{{item.sightName}}</div>
                    <div class="tag-list">
                        <span class="sight-tag" v-for="(tags,index) of item.sightTags" :key="index">{{tags}}</span>
                    </div>
                    <div class="sight-price">
                        <span class="sell">{{item.selled}}</span>
                        <span><span class="price">￥{{item.price}}</span> 起</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DayTriptList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.container
  background #f2f2f2
  .list-item
    background #fff
    padding .2rem
    .item-info
      display flex
      padding-bottom .2rem
      .sight-img
        height 1.6rem
        width 1.6rem
      .sight-info
        flex 1
        padding-left .2rem
        .sight-title
          font-size .3rem
          line-height .35rem
        .sight-com
          margin-top .2rem
          color $shallowText
        .sight-price
          margin-top .2rem
          display flex
          justify-content space-between
          font-size .23rem
          color #999
          .price
            color $priceColor
            font-size .3rem
            font-weight bolder
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

</style>
