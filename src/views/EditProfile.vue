<template>
  <div class="editprofile">
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
              placeholder="Edit your W#"
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
              placeholder="Edit your first name"
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
              placeholder="Edit your last name"

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
              placeholder="Edit your username"

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
              placeholder="Edit your email"
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
              placeholder="Edit your phone number"
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
              placeholder="Edit your address"
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
              placeholder="Edit your city"
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
              placeholder="Edit your state"
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
              placeholder="Edit your zip"
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
              placeholder="Change your password"
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
              placeholder="Confirm your password"
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
                       :size="size">Save Changes
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
