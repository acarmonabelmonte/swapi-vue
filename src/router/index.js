import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import People from '../views/People.vue'
import Planets from '../views/Planets.vue'
import Starships from '../views/Starships.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
    path: '/people',
    name: 'People',
    component: People
  },
    {
    path: '/planets',
    name: 'planets',
    component: Planets
  },
     {
    path: '/starships',
    name: 'starships',
    component: Starships
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
