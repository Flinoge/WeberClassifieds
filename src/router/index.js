import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'

// Containers
import _Dashboard from 'containers/Dashboard'

// Views
import Login from 'views/Login'
import Signup from 'views/Signup'
import Profile from 'views/Profile'
import EditProfile from 'views/EditProfile'
import CreatePost from 'views/CreatePost'

// Views - Components

// Views - Pages

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueResource)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: _Dashboard
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
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/editprofile',
      name: 'EditProfile',
      component: EditProfile
    },
    {
      path: '/createpost',
      name: 'CreatePost',
      component: CreatePost
    }
  ]
})
