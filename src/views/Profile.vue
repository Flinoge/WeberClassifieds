<template>
  <div class="profile">

    <br>
    <br>

    <ui-textbox
      disabled label="W#" placeholder="W#" v-model="textbox5"
    ></ui-textbox>

    <ui-textbox
      disabled label="Username" placeholder="Username" v-model="textbox5"
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

  export default {
    name: 'Profile',
    components: {
      UiTextbox,
      UiButton
    },
    computed: {},
    data () {
      return {
      }
    }
  }
</script>
