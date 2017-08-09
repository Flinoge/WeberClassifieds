<template>
  <div class="editprofile">
    <div class="container">
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
              placeholder="Edit your phone"
              type="phone"

              v-model="phone"

              :invalid="phoneTouched && email.length === 0"
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
              label="New Password"
              placeholder="New password"
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
              label="Confirm New Password"
              placeholder="Confirm New Password"
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
            <ui-button color="primary" style="border-color:black; background-color: rgb(73, 38, 101);" raised
                       :size="size" @click="updateProfile">Save Changes
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
  import axios from 'axios'
  export default {
    name: 'full',
    components: {
      UiTextbox,
      UiButton
    },
    mounted () {
      axios({
        method: 'get',
        url: 'https://www.weberclassifieds.website/rest_service/users/' + localStorage.getItem('userid'),
        headers: {
          authToken: localStorage.getItem('cert')
        }
      }).then(response => {
        this.username = response.data.username
        this.wnumber = response.data.wNumber
        this.email = response.data.email
        this.fname = response.data.firstName
        this.lname = response.data.lastName
        this.address1 = response.data.address.address1
        this.city = response.data.address.city
        this.state = response.data.address.state
        this.zip = response.data.address.zip
        this.accessLevel = response.data.accessLevel
        this.phone = response.data.phone
      }).catch(error => {
        console.log(error)
      })
    },
    computed: {},
    methods: {
      updateProfile () {
        axios({
          method: 'put',
          url: 'https://www.weberclassifieds.website/rest_service/users/' + localStorage.getItem('userid'),
          headers: {
            authToken: localStorage.getItem('cert')
          },
          data: {
            id: localStorage.getItem('userid'),
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
              zip: this.zip
            },
            accessLevel: this.accessLevel
          }
        }).then(response => {
          console.log(response)
          this.$router.push('profile')
        }).catch(error => {
          console.log(error)
        })
      }
    },
    data () {
      return {
        username: '',
        wnumber: '',
        fname: '',
        lname: '',
        accessLevel: '',
        email: '',
        emailTouched: false,
        address1: '',
        address1Touched: false,
        city: '',
        cityTouched: false,
        state: '',
        stateTouched: false,
        zip: '',
        phone: '',
        phoneTouched: false,
        zipTouched: false,
        password: '',
        passwordTouched: false,
        confirmpassword: '',
        confirmpasswordTouched: false,
        size: 'sm'
      }
    }
  }
</script>
