import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import People from '../pages/People.vue'
import Planets from '../pages/Planets.vue'
import Starships from '../pages/Starships.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/people', component: People },
  { path: '/planets', component: Planets },
  { path: '/starships', component: Starships }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
