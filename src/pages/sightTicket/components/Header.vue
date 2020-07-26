<template>
    <div class="header border-bottom">
        <router-link to="/" class="header-left">
            <div class="iconfont back-icon">&#xe658;</div>
        </router-link>
        <input type="text" class="header-input" placeholder="输入景点或城市">
        <div class="right-btn">搜索</div>
   </div>
</template>

<script>
export default {
  name: 'SightTicketHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
  display flex
  line-height $headerHeight
  align-items center
  .header-input
    height .6rem
    flex 1
    background #f2f2f2
    border-radius .4rem
    text-align center
  .header-left
    width .8rem
    text-align center
    .back-icon
      font-size .5rem
      color #616161
  .right-btn
    width 1rem
    color #616161
    background #fff
    text-align center
</style>
