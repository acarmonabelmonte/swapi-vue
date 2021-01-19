import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import People from '../views/People.vue'
import Planets from '../views/Planets.vue'
import Starships from '../views/Starships.vue'
import PeopleDetails from '../views/PeopleDetails.vue'
import PlanetsDetails from '../views/PlanetsDetails.vue'
import StarshipsDetails from '../views/StarshipsDetails.vue'

Vue.use(VueRouter)

const routes = [{
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
    name: 'Planets',
    component: Planets
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships
  },
  {
    path: '/people/:id',
    name: 'PeopleDetails',
    component: PeopleDetails
  },
  {
    path: '/planets/:id',
    name: 'PlanetsDetails',
    component: PlanetsDetails
  },
  {
    path: '/starships/:id',
    name: 'StarshipsDetails',
    component: StarshipsDetails
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router