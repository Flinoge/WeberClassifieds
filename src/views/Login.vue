<template>
  <div class="app">
      <div class="container-fluid">

        <div style="opacity: 0.5; position: fixed; top: 21%; left: 10%; background-image: url(https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Weber_State_University_logo.svg/1280px-Weber_State_University_logo.svg.png); background-size: 80% 240px; background-repeat: no-repeat; height: 1000px; width: 100%;">

        </div>
        <br>
        <br>
        <br>
        <!--Top Banner-->
        <div
          style="background-color: rgb(73, 38, 101); color: white; border-top-right-radius: 5px; border-top-left-radius: 5px; padding: 20px; font-size: 20px;">
          <div class="col-sm-12">
            Login to Weber Classifieds
          </div>
        </div>

        <!--Main Content-->
        <div
          style="border-color: rgb(73, 38, 101); border-style: solid; border-width: 5px; background-color: white;  padding: 20px;">

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
            <ui-button color="primary" style="border-color: black; background-color: rgb(73, 38, 101);" raised
                       size="sm" @click="login">Log In
            </ui-button>
          </div>

        </div>

        <!--Bottom Content-->
        <div
          style=" background-color: rgb(73, 38, 101); color: white; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; padding: 20px; font-size: 20px;">
          <div class="col-sm-12">
            Don't have an account? Sign up <a href="/#/signup"
                                              style="color: white; text-decoration: underline;">here</a>
          </div>
        </div>

        <!--Extra Spacing for bottom of page-->
        <br>
        <br>
        <br>

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
        axios({
          method: 'get',
          url: 'http://g3project.sytes.net/weberclassifieds/authentication',
          auth: {
            username: this.username,
            password: this.password
          }
        }).then(response => {
          localStorage.setItem('cert', response.data.authenticationToken)
          localStorage.setItem('refreshCert', response.data.refreshToken)
          this.$router.push('dashboard')
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
