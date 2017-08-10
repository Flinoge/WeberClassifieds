<template>
  <div class="app">
    <top-bar/>
    <div class="app-body">
      <main class="profile ml-auto mr-auto" style="width: 50%;">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import UiTextbox from 'keen-ui/src/UiTextbox.vue'
  import UiButton from 'keen-ui/src/UiButton.vue'
  import TopBar from '../components/Topbar.vue'
  export default {
    name: 'full',
    components: {
      UiTextbox,
      UiButton,
      TopBar
    },
    computed: {},
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  .profile {
    display: block;
  }
</style>
