<template>
  <div class="app">
    <div class="app-body">
      <main class="main">
        <div class="container-fluid">

          <!--Top Banner-->
          <div style=" background-color: rgb(73, 38, 101); color: white; border-top-right-radius: 5px; border-top-left-radius: 5px; padding: 20px; font-size: 20px;">
            <div class="col-sm-12">
              Login to Weber Classifieds
            </div>
          </div>

          <!--Main Content-->
          <div style="border-color: rgb(73, 38, 101); border-style: solid; border-width: 5px; background-color: white;  padding: 20px;">

            <div class="form-group">
              <div class="col-sm-12">
                <ui-textbox
                  floating-label
                  label="W# or Email"
                  placeholder=""
                  v-model="username"
                ></ui-textbox>
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <ui-textbox
                  floating-label
                  label="Password"
                  placeholder=""
                  type="password"
                  v-model="password"
                ></ui-textbox>
              </div>
            </div>

            <br>

            <div class="form-group">
              <div class="col-sm-12">
                <button class="btn-primary btn" style="border-color: black; background-color: rgb(73, 38, 101);">Log In</button>
              </div>
            </div>

          </div>

          <!--Bottom Content-->
          <div style=" background-color: rgb(73, 38, 101); color: white; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; padding: 20px; font-size: 20px;">
            <div class="col-sm-12">
              Don't have an account? Sign up <a href="" style="color: white; text-decoration: underline;">here</a>
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

  export default {
    name: 'full',
    components: {
      UiTextbox
    },
    computed: {
    },
    data () {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>
