<template>
  <div class="item">
    <div class="col-sm-12">
      <ui-textbox
        floating-label
        label="Title"
        placeholder=""
        v-model="title"
      ></ui-textbox>
    </div>

    <div class="col-sm-12">
      <ui-textbox
        floating-label
        label="Price"
        placeholder=""
        v-model="price"
      ></ui-textbox>
    </div>


    <div class="col-sm-12">
      <ui-textbox
        floating-label
        label="Username"
        placeholder=""
        v-model="title"
      ></ui-textbox>
    </div>

    <div><b>Title:</b></div>
    <div><b>Category:</b> {{ itemInfo.category }}</div>
    <div><b>Price:</b> {{ itemInfo.price }}</div>
    <div><b>Listing Type:</b> {{ itemInfo.type }}</div>
    <div><b>Message:</b> {{ itemInfo.message }}</div>
  </div>
</template>

<script>
  import axios from 'axios'
  import UiTextbox from 'keen-ui/src/UiTextbox.vue'
  import UiButton from 'keen-ui/src/UiButton.vue'

  export default {
    name: 'MyPost',
    props: {
      itemID: {
        type: Number,
        required: true
      }
    },
    components: {
      UiTextbox,
      UiButton
    },
    methods: {
    },
    computed: {
    },
    mounted () {
      let window = this
      axios({
        method: 'get',
        url: 'https://www.weberclassifieds.website/restservice/listings/' + this.itemID,
        headers: {
          authToken: localStorage.getItem('cert')
        }
      }).then(response => {
        window.itemInfo = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    data () {
      return {
        itemInfo: {
          user: '',
          title: '',
          price: ''
        }
      }
    }
  }
</script>
