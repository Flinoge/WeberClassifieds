import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'

// Containers
import _Dashboard from 'containers/Dashboard'
import _Profile from 'containers/Profile'

// Views
import Login from 'views/Login'
import Signup from 'views/Signup'
import CreatePost from 'views/CreatePost'
import EditProfile from 'views/EditProfile'
import Profile from 'views/Profile'
import MyPosts from 'views/MyPosts'

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
          path: '/createpost',
          name: 'Create Post',
          component: CreatePost
        },
        {
          path: '/myposts',
          name: 'My Posts',
          component: MyPosts
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
      path: '/profile',
      name: 'Profile',
      component: _Profile,
      children: [
        {
          path: '/',
          name: 'Profile',
          component: Profile
        },
        {
          path: '/editprofile',
          name: 'Edit Profile',
          component: EditProfile
        }
      ]
    }
  ]
})
