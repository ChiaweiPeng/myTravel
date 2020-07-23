<template>
    <div class="gallery-container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) of imgs" :key="index">
                  <img class="gallery-img" :src="item" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'commonGallery',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.gallery-container >>> .swiper-container
    overflow inherit
.gallery-container
    z-index 99
    position :fixed
    top: 0
    bottom : 0
    left :0
    right:0
    background rgba(0, 0, 0, .9)
    display flex
    flex-direction column
    justify-content center
    align-items center
    .wrapper
        width 100%
        height  0
        padding-bottom 100%
        .gallery-img
            width  100%
        .swiper-pagination
            color #fff
            bottom -1rem

</style>
