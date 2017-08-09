<template>
  <div class="profile">

    <br>
    <br>

    <ui-textbox
      disabled label="W#" placeholder="W#" v-model="wNumber"
    ></ui-textbox>

    <ui-textbox
      disabled label="Username" placeholder="Username" v-model="username"
    ></ui-textbox>

    <br>
    <br>

    <div class="form-group">
      <div class="col-sm-12">
        <a class="nav-link" href="#/editprofile">
        <ui-button color="primary" style="border-color:black; background-color: rgb(73, 38, 101);" raised
                   :size="size">Edit Profile
        </ui-button>
        </a>
      </div>
    </div>

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
        this.wNumber = response.data.wNumber
        this.username = response.data.userName
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    data () {
      return {
        wNumber: '',
        username: '',
        size: 'sm'
      }
    }
  }
</script>
