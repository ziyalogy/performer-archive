import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Artists from '../views/Artists.vue'
import Bands from '../views/Bands.vue'
import Labels from '../views/Labels.vue'
import Band from '../views/Band.vue'
import Label from '../views/Labels.vue'
import Artist from '../views/Artist.vue'
import Account from '../views/Account.vue'
import AddAlbum from '../views/dashboard/AddAlbum.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import AddArtist from '../components/AddArtist.vue'

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
    path: '/artist/add',
    name: 'AddArtist',
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
    path: '/bands',
    name: 'bands',
    component:Bands,
  },
  {
    path: '/band/:id',
    name: 'band',
    component:Band,
  },
  {
    path: '/labels',
    name: 'Labels',
    component:Labels,
  },
  {
    path: '/label/:id',
    name: 'label',
    component:Label,
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
