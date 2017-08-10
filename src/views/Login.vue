<template>
  <div class="app">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <img id="body" src="../../static/assets/overview.jpg" />
        <br>
        <br>
        <br>
        <!--Top Banner-->
        <div
          style="background-color: rgb(73, 38, 101); color: white; border-top-right-radius: 5px; border-top-left-radius: 5px; padding: 20px; font-size: 20px;">
          <div class="col-sm-6">
            Login to Weber Classifieds
          </div>
        </div>

        <!--Main Content-->
        <div
          style="border-color: rgb(73, 38, 101); background-color: white; opacity: 1; border-style: solid; border-width: 5px;  padding: 20px;">

          <div class="col-sm-12">
            <ui-textbox
              floating-label
              label="Username"
              placeholder=""
              v-model="username"
            ></ui-textbox>
          </div>

          <div class="col-sm-12">
            <ui-textbox
              floating-label
              label="Password"
              placeholder=""
              type="password"
              v-model="password"
            ></ui-textbox>
          </div>

          <br>


          <div class="col-sm-12">
            <ui-button id="login" color="primary" style="border-color: black; background-color: rgb(73, 38, 101);" raised
                       size="sm" @click="login">Log In
            </ui-button>
          </div>

        </div>

        <!--Bottom Content-->
        <div
          style=" background-color: rgb(73, 38, 101); color: white; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; padding: 20px; font-size: 20px;">
          <div class="col-sm-12">
            Don't have an account? Sign up <a href="#/signup"
                                              style="color: white; text-decoration: underline;">here</a>
          </div>
        </div>

        <!--Extra Spacing for bottom of page-->
        <br>
        <br>
        <br>

      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
  import UiTextbox from 'keen-ui/src/UiTextbox.vue'
  import UiButton from 'keen-ui/src/UiButton.vue'
  import axios from 'axios'

  export default {
    name: 'full',
    components: {
      UiTextbox,
      UiButton
    },
    computed: {},
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        document.getElementById('login').innerText = 'Signing In...'
        axios({
          method: 'get',
          url: 'https://www.weberclassifieds.website/rest_service/authentication',
          auth: {
            username: this.username,
            password: this.password
          }
        }).then(response => {
          localStorage.setItem('cert', response.data.authenticationToken)
          localStorage.setItem('refreshCert', response.data.refreshToken)
          axios({
            method: 'get',
            url: 'https://www.weberclassifieds.website/rest_service/users?username=' + this.username,
            headers: {
              authToken: localStorage.getItem('cert')
            }
          }).then(response => {
            localStorage.setItem('userid', response.data[0].id)
            document.getElementById('login').innerText = 'Sign In'
            this.$router.push('dashboard')
          }).catch(error => {
            document.getElementById('login').innerText = 'Sign In'
            console.log(error)
          })
        }).catch(error => {
          document.getElementById('login').innerText = 'Sign In'
          console.log(error)
        })
      }
    }
  }
</script>


<style scoped>
  #body {
    position: fixed;,
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    opacity: 0.2;

    z-index: 0;
  }
</style>
