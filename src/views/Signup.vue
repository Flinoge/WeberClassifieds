<template>
  <div class="app">
    <div class="app-body">
      <main class="main">
        <div class="container-fluid">

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
                  error="This field is required"
                  v-model="wnumber"

                  :invalid="wnumberTouched && wnumber.length === 0"
                  @touch="wnumberTouched = true"

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
                  label="Email"
                  error="This field is required"
                  placeholder="Enter your email"
                  type="email"

                  v-model="email"

                  :invalid="emailTouched && email.length === 0"
                  @touch="emailTouched = true"

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
                  label="Degree"
                  placeholder="Enter your degree/field of study"

                  v-model="degree"

                  :invalid="degreeTouched && degree.length === 0"
                  @touch="degreeTouched = true"

                  required
                ></ui-textbox>
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <ui-textbox
                  floating-label
                  label="Address Line 1"
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
                  label="Address Line 2"
                  placeholder=""
                  v-model="address2"
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
                  error="This field is required"

                  :invalid="zipTouched && zip.length === 0"
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
                <button class="btn-primary btn" style="border-color: black; background-color: rgb(73, 38, 101);">Sign up</button>
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
        wnumber: '',
        wnumberTouched: false,
        fname: '',
        fnameTouched: false,
        lname: '',
        lnameTouched: false,
        email: '',
        emailTouched: false,
        degree: '',
        degreeTouched: false,
        address1: '',
        address1Touched: false,
        address2: '',
        city: '',
        cityTouched: false,
        state: '',
        stateTouched: false,
        zip: '',
        zipTouched: false,
        password: '',
        passwordTouched: false,
        confirmpassword: '',
        confirmpasswordTouched: false
      }
    }
  }
</script>
