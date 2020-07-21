<template>
   <div class="search-area">
       <input class="search-input" type="text" placeholder="请输入城市或拼音" />
   </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
   .search-area
        background :$bgColor
        text-align :center
        padding: .1rem .3rem
        .search-input
            height :.5rem
            width :100%
            border-radius:.1rem
            text-align :center
            color:#666
            padding : 0 .2rem
            box-sizing:border-box
</style>
