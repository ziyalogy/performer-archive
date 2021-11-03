import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddAlbum from '../views/AddAlbum.vue'
import Album from '../views/Album.vue'
import EditAlbum from '../views/EditAlbum.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-album',
    name: 'add-album',
    component: AddAlbum,
  },
  {
    path: '/album/:id',
    name: 'album',
    component: Album,
  },
  {
    path: '/edit-album/:id',
    name: 'edit-album',
    component: EditAlbum,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
