<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="list-area">
            <div class="list-title border-topbottom">您的位置</div>
            <div class="choose-area">
                <button class="list-btn">北京</button>
            </div>
        </div>
        <div class="list-area">
            <div class="list-title border-topbottom">热门城市</div>
            <div class="choose-area">
                <button class="list-btn">北京</button>
                <button class="list-btn">北京</button>
                <button class="list-btn">北京</button>
                <button class="list-btn">北京</button>
                <button class="list-btn">北京</button>
                <button class="list-btn">北京</button>
                <button class="list-btn">北京</button>
                <button class="list-btn">北京</button>
                <button class="list-btn">北京</button>
            </div>
        </div>
        <div class="list-area">
            <div class="list-title border-topbottom">A</div>
            <div class="choose-area-lines">
                <div class="list-lines">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
            </div>
        </div>
        <div class="list-area">
            <div class="list-title border-topbottom">B</div>
            <div class="choose-area-lines">
                <div class="list-lines">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
            </div>
        </div>
        <div class="list-area">
            <div class="list-title border-topbottom">C</div>
            <div class="choose-area-lines">
                <div class="list-lines">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
                <div class="list-lines border-topbottom">阿拉尔</div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        overflow:hidden
        position:absolute
        top : 1.58rem
        bottom :0
        left:0
        right:0
        .border-topbottom
            &:before
                border-color:#ddd
            &:after
                border-color:#ddd
        .list-title
            line-height : .5rem
            background : #eee
            padding-left : .2rem
            color:#666
        .choose-area
            padding : .25rem .6rem 0 .2rem
            .list-btn
                padding: .04rem .7rem
                border-radius:.08rem
                background : #fff
                border : 1px solid #999
                margin-left : .1rem
                margin-bottom: .25rem
        .list-lines
            line-height : .76rem
            padding-left: .2rem

</style>
