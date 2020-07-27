<template>
   <ul class="list">
       <li class="list-item"
       v-for="item of letters"
       :key="item"
       @click="handleClick"
       @touchmove.prevent="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd"
       :ref="item"
       >{{item}}</li>
   </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {}
  },
  data () {
    return {
      touchStatus: false,
      startY: '',
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 78
          const index = Math.floor((touchY - this.startY) / 16.8)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
   .list
        display : flex
        flex-direction :column
        justify-content:center
        position:absolute
        right:0
        top: 1.58rem
        bottom:0
        width:.4rem
        .list-item
            line-height :.35rem
            text-align : center
            color:$bgColor
            font-size:.24rem

</style>
