<template>
  <div class="profile">
    <div class="container-fluid">
      <br>
      <!--Top Banner-->
      <div
        style="background-color: rgb(73, 38, 101); color: white; border-top-right-radius: 5px; border-top-left-radius: 5px; padding: 20px; font-size: 20px;">
        <div class="col-sm-12">
          Your Weber Classifieds Profile
        </div>
      </div>

      <!--Main Content-->
      <div
        style="border-color: rgb(73, 38, 101); border-style: solid; border-width: 5px; background-color: white;  padding: 20px;">

        <div class="form-group">
          <div class="col-sm-12">
            <ui-textbox
              floating-label
              label="W#"
              placeholder="W#"
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
              placeholder="First Name"
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
              placeholder="Last Name"

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
              placeholder="Username"

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
              error="This field is required"
              placeholder="Email"
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
              label="Phone"
              error="This field is required"
              placeholder="Phone"
              type="phone"

              v-model="phone"

              :invalid="phoneTouched && phone.length === 0"
              @touch="phoneTouched = true"

              required
            ></ui-textbox>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-12">
            <ui-textbox
              floating-label
              label="Address Line"
              placeholder="Address Line"
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
              placeholder="City"
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
              placeholder="State"
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
              placeholder="Zip"
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
              placeholder="Password"
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
              label="Password"
              placeholder="Password"
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
            <ui-button color="primary" style="border-color: black; background-color: rgb(73, 38, 101);" raised
                       :size="size">Edit Profile
            </ui-button>

          </div>
        </div>

      </div>


      <!--Bottom Content-->
      <div
        style=" background-color: rgb(73, 38, 101); color: white; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; padding: 20px; font-size: 20px;">
        <div class="col-sm-12">
          <!--Bottom Banner Content Needed?-->
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
  export default {
    name: 'full',
    components: {
      UiTextbox,
      UiButton
    },
    computed: {},
    data () {
      return {
        wnumber: '',
        wnumberTouched: false,
        fname: '',
        fnameTouched: false,
        lname: '',
        lnameTouched: false,
        username: '',
        usernameTouched: false,
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
