import { createRouter, createWebHashHistory } from 'vue-router'
import ContactsList from '../views/ContactsList.vue'
import AddContact from '../views/AddContact.vue'
import ContactInfo from '../views/ContactInfo.vue'

const routes = [
  {
    path: '/',
    name: 'ContactsList',
    component: ContactsList
  },
  {
    path: '/add',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/contacts/:id',
    name: 'ContactInfo',
    component: ContactInfo
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
