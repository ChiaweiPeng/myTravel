<template>
    <div class="icons">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icons-grid">
                    <router-link tag="div" class="icon"  v-for="item of page" :key="item.id" :to="'/' + item.link">
                        <img class="icon-img" :src="item.imgUrl"/><!-- src前面别忘了冒号 -->
                        <p class="icon-p">{{item.desc}}</p>
                    </router-link>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconsList: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }

}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
  .icons
    background #fff
    border-radius .3rem
    .icons-grid
        display :grid
        grid-template-columns: repeat(4,1fr)
        grid-template-rows: repeat(2,15vh)
        overflow:hidden
        .icon
            display:flex
            flex-direction : column
            justify-content :space-evenly
            align-items :center
            overflow: hidden
            .icon-img
                width :8vh
                height :8vh
            .icon-p
                color:$darkText
                width :22vw
                text-align: center
                ellipsis()
</style>
