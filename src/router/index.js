import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import SightTicket from '@/pages/sightTicket/SightTicket'
import DayTrip from '@/pages/daytrip/DayTrip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/sightticket',
      name: 'SightTicket',
      component: SightTicket
    },
    {
      path: '/daytrip',
      name: 'DayTrip',
      component: DayTrip
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
