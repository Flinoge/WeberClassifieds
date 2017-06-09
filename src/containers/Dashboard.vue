<template>
  <div class="app">
    <div class="app-body">
      <main class="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'full',
    components: {
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
