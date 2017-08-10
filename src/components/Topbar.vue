<template>
  <nav class="navbar navbar-toggleable-md" style="position: fixed; z-index: 9999; height: 55px; top: 0; width: 100%; background-color: lightgrey;">
    <button class="navbar-toggler navbar-toggler-right" style="color:black;" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" style="color:black" href="#/dashboard">Weber Classifieds</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

        <li class="nav-item" style="margin-top: 15px;">
          <a class="nav-link" href="#/dashboard" style="color: black;">Home</a>
        </li>
        <li class="nav-item" style="margin-top: 15px;">
          <a class="nav-link" href="#/profile" style="color: black;">Profile</a>
        </li>
        <li class="nav-item" style="margin-top: 15px;">
          <a class="nav-link" href="#/myposts" style="color: black;">My Posts</a>
        </li>
        <li class="nav-item" style="margin-top: 15px;">
          <a class="nav-link" href="#/" style="color: black;">Logout</a>
        </li>

      </ul>

      <div class="searchBar" style="color: black;">
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
    color: black;
  }
</style>
