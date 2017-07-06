<template>
  <div class="app">
    <topbar/>
    <div class="app-body">
      <sidebar/>
      <main class="main">
        <div class="container-fluid">
          <items></items>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
  import sidebar from '../components/Sidebar.vue'
  import topbar from '../components/Topbar.vue'
  import items from '../components/items.vue'

  export default {
    name: 'full',
    components: {
      sidebar,
      topbar,
      items
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
