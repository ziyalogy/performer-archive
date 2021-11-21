import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Artists from '../views/Artists.vue'
import Artist from '../views/Artist.vue'
import Account from '../views/Account.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import AddArtist from '../views/AddArtist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
  {
    path: '/add/',
    name: 'addartist',
    component: AddArtist,
  },
  
  {
    path: '/artists',
    name: 'artists',
    component: Artists,
  },
  {
    path: '/artist/:id',
    name: 'artist',
    component: Artist,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
