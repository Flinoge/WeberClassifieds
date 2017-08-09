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
        <div style="background-color: rgb(73, 38, 101); color: white; border-top-right-radius: 5px; border-top-left-radius: 5px; padding: 20px; font-size: 20px;">
          <div class="col-sm-12">
            Sign up for a Weber Classifieds Account
          </div>
        </div>

        <!--Main Content-->
        <div style="border-color: rgb(73, 38, 101); border-style: solid; border-width: 5px; background-color: white;  padding: 20px;">

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="W#"
                placeholder="Enter your W#"
                v-model="wnumber"

                @touch="wnumberTouched = true"

                error="Must be 8 numbers long"

                :maxlength="8"
                :invalid="wnumberTouched && wnumber.length != 8"

                required
              ></ui-textbox>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="First Name"
                placeholder="Enter your first name"
                error="This field is required"
                v-model="fname"

                :invalid="fnameTouched && fname.length === 0"
                @touch="fnameTouched = true"

                required
              ></ui-textbox>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                autocomplete="off"
                error="This field is required"
                label="Last Name"
                placeholder="Enter your last name"

                v-model="lname"

                :invalid="lnameTouched && lname.length === 0"
                @touch="lnameTouched = true"

                required
              ></ui-textbox>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                autocomplete="off"
                :error="error"
                label="Username"
                placeholder="Enter your username"

                v-model="username"

                :invalid="(usernameTouched && username.length === 0) || postError"
                @touch="usernameTouched = true"

                required
              ></ui-textbox>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="Email"
                error="Enter a valid email address"
                placeholder="Enter your email"
                type="email"

                v-model="email"

                :invalid="emailTouched && !(email.includes('@'))"
                @touch="emailTouched = true"

                required
              ></ui-textbox>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="Phone"
                error="Enter a 10 digit phone number"
                placeholder="Enter your phone number"
                type="phone"

                v-model="phone"

                @touch="phoneTouched = true"

                :maxlength="10"
                :invalid="phoneTouched && phone.length != 10"

                required
              ></ui-textbox>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="Address Line"
                placeholder="Enter your address"
                v-model="address1"
                error="This field is required"

                :invalid="address1Touched && address1.length === 0"
                @touch="address1Touched = true"

                required
              ></ui-textbox>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="City"
                placeholder="Enter your city"
                v-model="city"
                error="This field is required"

                :invalid="cityTouched && city.length === 0"
                @touch="cityTouched = true"

                required
              ></ui-textbox>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="State"
                placeholder="Enter your state"
                v-model="state"
                error="This field is required"

                :invalid="stateTouched && state.length === 0"
                @touch="stateTouched = true"

                required
              ></ui-textbox>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="Zip"
                placeholder=""
                v-model="zip"
                error="Enter a 5 digit zipcode"

                :maxlength="5"
                :invalid="zipTouched && zip.length != 5"

                @touch="zipTouched = true"

                required
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
                error="Password must be greater than 8 characters"

                :invalid="passwordTouched && password.length < 8"
                @touch="passwordTouched = true"

                required
              ></ui-textbox>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="Confirm Password"
                placeholder=""
                type="password"
                v-model="confirmpassword"
                error="Passwords must match"

                :invalid="confirmpasswordTouched && confirmpassword != password"
                @touch="confirmpasswordTouched = true"

                required
              ></ui-textbox>
            </div>
          </div>

          <br>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-button color="primary" style="border-color: black; background-color: rgb(73, 38, 101);" raised :size="size" @click="signup">Sign up</ui-button>
            </div>
          </div>

        </div>

        <!--Bottom Content-->
        <div style=" background-color: rgb(73, 38, 101); color: white; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; padding: 20px; font-size: 20px;">
          <div class="col-sm-12">
            Already have an account? Log in <a href="" style="color: white; text-decoration: underline;">here</a>
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
    methods: {
      signup () {
        axios({
          method: 'post',
          url: 'https://www.weberclassifieds.website/rest_service/users',
          headers: {
            UserCreateToken: '3D!@Aa@Ltvz^XdC0t5vp9F$qd@dn@V#ExVu#soxY%fp08D1eCC'
          },
          data: {
            userName: this.username,
            password: this.password,
            wNumber: this.wnumber,
            email: this.email,
            phone: this.phone,
            firstName: this.fname,
            lastName: this.lname,
            address: {
              address1: this.address1,
              city: this.city,
              state: this.state,
              zip: this.state
            },
            accessLevel: 'STANDARD'
          }
        }).then(response => {
          this.$router.push('/')
        }).catch(error => {
          console.log(error)
          this.error = 'Username is already in use'
          this.postError = true
        })
      }
    },
    computed: {
    },
    data () {
      return {
        wnumber: '',
        wnumberTouched: false,
        fname: '',
        fnameTouched: false,
        lname: '',
        lnameTouched: false,
        email: '',
        emailTouched: false,
        address1: '',
        address1Touched: false,
        city: '',
        cityTouched: false,
        state: '',
        stateTouched: false,
        zip: '',
        zipTouched: false,
        password: '',
        passwordTouched: false,
        confirmpassword: '',
        confirmpasswordTouched: false,
        username: '',
        usernameTouched: false,
        phone: '',
        phoneTouched: false,
        size: 'sm',
        error: 'This field is required.',
        postError: false
      }
    }
  }
</script>

<style scoped>
  #body {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

    opacity: 0.2;

  }
</style>
