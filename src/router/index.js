import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from '../components/Formulario.vue'
import Choice from '../components/Choice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/choice',
    name: 'Choice',
    component: Choice
  },

]

const router = new VueRouter({
  routes
})

export default router
