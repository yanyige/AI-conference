import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Professor from '@/components/Professor'
import Schedule from '@/components/Schedule'
import Report from '@/components/Report'
import Organization from '@/components/Organization'
import Place from '@/components/Place'
import Photos from '@/components/Photos'
import Foods from '@/components/Foods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/professor',
      name: 'Professor',
      component: Professor
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/organization',
      name: 'Organization',
      component: Organization
    },
    {
      path: '/place',
      name: 'Place',
      component: Place
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/foods',
      name: 'Foods',
      component: Foods
    }
  ]
})
