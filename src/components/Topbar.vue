<template>
  <nav class="navbar navbar-toggleable-md" style="background-color: rgb(73, 38, 101); margin-bottom: -55px;">
    <button class="navbar-toggler navbar-toggler-right"  style="color:white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" style="color:white" href="#">Weber Classifieds</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="/#/dashboard">Home<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#/dashboard">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#/editprofile">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#/">Log Out</a>
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
    name: 'main'
  }
</script>
