<template>
  <nav class="navbar navbar-toggleable-md" style="position: fixed; z-index: 9999; height: 55px; top: 0; width: 100%; background-color: rgb(73, 38, 101);">
    <button class="navbar-toggler navbar-toggler-right" style="color:white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" style="color:white" href="#/dashboard">Weber Classifieds</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

        <li class="nav-item">
          <a class="nav-link" href="#/dashboard">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/profile">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/myposts">My Posts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/">Logout</a>
        </li>

      </ul>

      <div class="searchBar">
        <ui-textbox
          floating-label
          class="float-right searchBar"
          label="Search"
          placeholder="Search"
          v-model="keyWord"
          @input="keyWordChange"
        ></ui-textbox>
      </div>

    </div>
  </nav>
</template>

<script>
  import { UiTextbox } from 'keen-ui'

  export default {
    name: 'main',
    components: {
      UiTextbox
    },
    props: {
      keyWordChange: {
        type: Function
      }
    },
    methods: {
      logout () {
        localStorage.setItem('cert', '')
        localStorage.setItem('refreshCert', '')
      }
    },
    data () {
      return {
        keyWord: ''
      }
    }
  }
</script>

<style scoped>
  .searchBar {
    width: 40%;
    color: white;
  }
</style>
