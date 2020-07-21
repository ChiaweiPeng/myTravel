<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="qnr-container border-bottom" v-for="item of qnrLists" :key="item.id">
                <div class="qnr-img-wrapper">
                    <img class="qnr-img" :src="item.imgUrl" />
                </div>
                <div class="qnr-info">
                    <p class="qnr-title">{{item.title}}</p>
                    <p class="qnr-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    qnrLists: Array
  }
}
</script>

<style lang="stylus" scoped>
.title
  line-height : .8rem
  background : #eee
  padding-left:.3rem
  color :$darkText
  font-weight:bold
.qnr-container
    .qnr-img-wrapper
        overflow:hidden
        height : 0
        padding-bottom:33.9%
        .qnr-img
            width : 100%
    .qnr-info
        padding : .3rem
        .qnr-title
            font-weight : bold
            margin-bottom: .2rem
</style>
