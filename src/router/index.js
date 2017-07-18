import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'

// Containers
import _Dashboard from 'containers/Dashboard'

// Views
import Login from 'views/Login'
import Signup from 'views/Signup'
import EditProfile from 'views/EditProfile'
import CreatePost from 'views/CreatePost'
import Profile from '../views/EditProfile.vue'

// Views - Components
import Items from '../components/items.vue'

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
      component: _Dashboard,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Items
        },
        {
          path: '/profile',
          name: 'Edit Profile',
          component: Profile
        },
        {
          path: '/createpost',
          name: 'Create Post',
          component: CreatePost
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
    },
    {
      path: '/editprofile',
      name: 'EditProfile',
      component: EditProfile
    }
  ]
})
