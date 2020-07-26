<template>
    <div class="container">
        <div class="btn-choose type">全部分类 <span class="iconfont">&#xe60b;</span> </div>
        <div class="btn-choose sort">推荐排序 <span class="iconfont">&#xe60b;</span> </div>
   </div>
</template>

<script>
export default {
  name: 'SightTicketTypeSort'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.container
  height $headerHeight
  display flex
  justify-content space-around
  border-bottom 1px solid #eee
  .btn-choose
    flex 1
    text-align center
    line-height $headerHeight
    .iconfont
      font-size .25rem
  .type
    border-right 1px solid #eee
</style>
