<template>
   <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe658;</div>
        </div>
        <router-link tag="div" to="/city" class="header-input">
            <span class="iconfont">&#xe63c;</span> 输入城市/景点/游玩
        </router-link>
        <router-link tag="div" to="/city" class="header-right">
            {{this.city}}
            <span class="iconfont">&#xe65c;</span>
        </router-link>
   </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color:#fff
        .header-left
            width: .64rem
            float: left
            text-align: center
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            text-indent: .2rem
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            border-radius: .1rem
            background: #fff
            color: #ccc
        .header-right
            min-width: 1.04rem
            float: right
            text-align:center
            padding-left:.1rem
            color: $linkText
</style>
