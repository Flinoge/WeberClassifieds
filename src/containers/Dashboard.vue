<template>
  <div class="app">
    <topbar/>
    <div class="app-body">
      <sidebar/>
      <main class="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
  import sidebar from '../components/Sidebar.vue'
  import topbar from '../components/Topbar.vue'

  export default {
    name: 'full',
    components: {
      sidebar,
      topbar
    },
    computed: {
    },
    methods: {
    },
    data () {
      return {
        example: 'Hi'
      }
    }
  }
</script>
