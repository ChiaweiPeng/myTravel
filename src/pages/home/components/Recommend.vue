<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul class="content">
            <router-link
            tag="li"
            class="rec-container border-bottom"
            v-for="item of recLists"
            :key="item.id"
            :to="'/detail/' + item.id"
            >
                <img class="rec-img" :src="item.imgUrl" />
                <div class="rec-info">
                    <p class="rec-title">{{item.title}}</p>
                    <p class="rec-desc">{{item.desc}}</p>
                    <button class="rec-btn">查看详情</button>
                </div>
            </router-link>
            <div class="rec-more">查看所有产品</div>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recLists: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .border-bottom
        &:before
            border-color #ddd
    .title
        line-height : .8rem
        padding-left:.3rem
        color :$blueText
        font-weight:bold
    .content
        border-radius .3rem
        background #fff
        .rec-container
            display : flex
            padding :.15rem
            border-radius .2rem
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
