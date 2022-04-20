import { createRouter, createWebHashHistory } from 'vue-router'
import ContactsList from '../views/ContactsList.vue'
import AddContact from '../views/AddContact.vue'
import ContactInfo from '../views/ContactInfo.vue'
import EditContact from '../views/EditContact.vue'

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
    path: '/contacts/edit/:id',
    name: 'EditContact',
    component: EditContact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
