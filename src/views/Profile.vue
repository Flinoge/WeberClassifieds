<template>
  <div class="profile" style="font-size: 20px;">

    <br>
    <br>

    <div class="row">
      <div class="col-sm-12" style="background-color: rgb(73, 38, 101); border-radius: 5px; color: white; padding: 10px;"><h3>My Profile</h3></div>
    </div>
    <br>

    <div class="col-sm-12" style="color: rgb(73, 38, 101);"><h4>Login Info</h4></div>
    <hr>
    <div class="col-sm-12"><b>W Number: </b><span id="wnumber"></span></div>
    <div class="col-sm-12"><b>Username: </b><span id="username"></span></div>

    <br>

    <div class="col-sm-12" style="color: rgb(73, 38, 101);"><h4>Contact Info</h4></div>
    <hr>
    <div class="col-sm-12"><b>First Name: </b><span id="firstname"></span></div>
    <div class="col-sm-12"><b>Last Name: </b><span id="lastname"></span></div>
    <div class="col-sm-12"><b>Phone: </b><span id="phone"></span></div>
    <div class="col-sm-12"><b>Email: </b><span id="email"></span></div>

    <br>

    <div class="col-sm-12" style="color: rgb(73, 38, 101);"><h4>Address Info</h4></div>
    <hr>
    <div class="col-sm-12"><b>Address Line: </b><span id="address"></span></div>
    <div class="col-sm-12"><b>City: </b><span id="city"></span></div>
    <div class="col-sm-12"><b>State: </b><span id="state"></span></div>
    <div class="col-sm-12"><b>Zip: </b><span id="zip"></span></div>

    <br>
    <br>

        <a class="nav-link" href="#/editprofile">
        <ui-button color="primary" style="border-color:black; background-color: rgb(73, 38, 101);" raised
                   :size="size">Edit Profile
        </ui-button>
        </a>

  </div>
</template>

<script>
  import UiTextbox from 'keen-ui/src/UiTextbox.vue'
  import UiButton from 'keen-ui/src/UiButton.vue'
  import axios from 'axios'

  export default {
    name: 'Profile',
    components: {
      UiTextbox,
      UiButton
    },
    computed: {},
    mounted () {
      axios({
        method: 'get',
        url: 'https://www.weberclassifieds.website/rest_service/users/' + localStorage.getItem('userid'),
        headers: {
          authToken: localStorage.getItem('cert')
        }
      }).then(response => {
        document.getElementById('wnumber').innerText = response.data.wNumber
        document.getElementById('username').innerText = response.data.userName
        document.getElementById('firstname').innerText = response.data.firstName
        document.getElementById('lastname').innerText = response.data.lastName
        document.getElementById('phone').innerText = response.data.phone
        document.getElementById('email').innerText = response.data.email
        document.getElementById('address').innerText = response.data.address.address1
        document.getElementById('city').innerText = response.data.address.city
        document.getElementById('state').innerText = response.data.address.state
        document.getElementById('zip').innerText = response.data.address.zip
        // console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    data () {
      return {
        wNumber: '',
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        size: 'sm'
      }
    }
  }
</script>
