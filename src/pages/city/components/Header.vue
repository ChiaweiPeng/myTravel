<template>
    <div class="header">
        <router-link to="/">
        <span class="iconfont back-icon">&#xe658;</span>
        </router-link>
        城市选择</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        height : $headerHeight
        line-height: $headerHeight
        text-align :center
        color :#fff
        font-size : .32rem
        background : $bgColor
        position : relative
        .back-icon
            position :absolute
            left: .2rem
            top:0
            font-size : .5rem
            color:$linkText
</style>
