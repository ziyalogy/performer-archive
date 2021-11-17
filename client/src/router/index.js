import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Artists from '../views/Artists.vue'
import Artist from '../views/Artist.vue'
import Account from '../views/Account.vue'
import AddArtist from '../views/AddArtist.vue'
import AddAlbum from '../views/dashboard/AddAlbum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
  {
    path: '/artist/add',
    name: 'add-artist',
    component: AddArtist,
  },
  {
    path: '/dashboard/add/album',
    name: 'add-album',
    component: AddAlbum,
  },
  {
    path: '/artists',
    name: 'artists',
    component:Artists,
  },
  {
    path: '/artist/:id',
    name: 'artist',
    component:Artist,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
