<template>
  <div>
    <sight-ticket-header></sight-ticket-header>
    <sight-ticket-typesort></sight-ticket-typesort>
    <sight-ticket-list :list="list"></sight-ticket-list>
  </div>
</template>

<script>
import SightTicketHeader from './components/Header'
import SightTicketTypesort from './components/TypeSort'
import SightTicketList from './components/List'
import axios from 'axios'
export default {
  name: 'SightTicket',
  data () {
    return {
      list: []
    }
  },
  components: {
    SightTicketHeader,
    SightTicketTypesort,
    SightTicketList
  },
  methods: {
    getListInfo () {
      axios.get('/api/sightticket.json')
        .then(this.getListInfoSucc)
    },
    getListInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data
      }
    }
  },
  mounted () {
    this.getListInfo()
  }
}
</script>

<style lang="stylus" scoped></style>
