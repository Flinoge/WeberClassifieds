<template>
  <div class="app">
    <div class="app-body">
      <main class="main">
        <div class="container-fluid">

          <!--Top Banner-->
          <div style="background-color: rgb(73, 38, 101); color: white; border-top-right-radius: 5px; border-top-left-radius: 5px; padding: 20px; font-size: 20px;">
            <div class="col-sm-12">
              Login to Weber Classifieds
            </div>
          </div>

          <!--Main Content-->
          <div style="border-color: rgb(73, 38, 101); border-style: solid; border-width: 5px; background-color: white;  padding: 20px;">

            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="Email"
                placeholder=""
                v-model="email"
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
              <ui-button color="primary" style="border-color: black; background-color: rgb(73, 38, 101);" raised :size="size"><router-link @click="test" style="color: white; text-decoration: none;" to="Dashboard">Log In</router-link></ui-button>
            </div>

          </div>

          <!--Bottom Content-->
          <div style=" background-color: rgb(73, 38, 101); color: white; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; padding: 20px; font-size: 20px;">
            <div class="col-sm-12">
              Don't have an account? Sign up <a href="/#/signup" style="color: white; text-decoration: underline;">here</a>
            </div>
          </div>

          <!--Extra Spacing for bottom of page-->
          <br>
          <br>
          <br>

        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import UiTextbox from 'keen-ui/src/UiTextbox.vue'
  import UiButton from 'keen-ui/src/UiButton.vue'

  export default {
    name: 'full',
    components: {
      UiTextbox,
      UiButton
    },
    computed: {
    },
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      test () {
        alert('Log In Successful')
      }
    }
  }
</script>
