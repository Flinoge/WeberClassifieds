import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

// Containers
import _Dashboard from 'containers/Dashboard'

// Views
import Main from 'views/Main'
import Login from 'views/Login'
import Signup from 'views/Signup'

// Views - Components

// Views - Pages

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/dashboard',
      redirect: '/home',
      name: 'Dashboard',
      component: _Dashboard,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Main
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
