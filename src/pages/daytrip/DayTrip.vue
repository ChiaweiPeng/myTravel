<template>
<div>
    <daytrip-header></daytrip-header>
    <daytrip-typesort></daytrip-typesort>
    <daytrip-list :list="list"></daytrip-list>
</div>
</template>

<script>
import DaytripHeader from './components/Header'
import DaytripTypesort from './components/TypeSort'
import DaytripList from './components/List'
import axios from 'axios'
export default {
  name: 'DayTrip',
  components: {
    DaytripHeader,
    DaytripTypesort,
    DaytripList
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getListInfo () {
      axios.get('/api/daytrip.json')
        .then(this.getListInfoSucc)
    },
    getListInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.list
      }
    }
  },
  mounted () {
    this.getListInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
