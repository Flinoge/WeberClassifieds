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
          <a class="nav-link" href="#/">Logout</a>
        </li>

      </ul>

      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" style="color: black;" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" style="color:white" type="submit">Search</button>
      </form>

    </div>
  </nav>
</template>

<script>
  export default {
    name: 'main',
    methods: {
      logout () {
        localStorage.setItem('cert', '')
        localStorage.setItem('refreshCert', '')
      }
    }
  }
</script>
