<template>
  <div class="item">
    <div><b>Title:</b> {{ itemInfo.title }}</div>
    <div><b>Category:</b> {{ itemInfo.category }}</div>
    <div><b>Price:</b> ${{ itemInfo.price }}</div>
    <div><b>Listing Type:</b> {{ itemInfo.type }}</div>
    <div><b>Message:</b> {{ itemInfo.message }}</div>
    <br>
    <b>Seller Contact Info</b>
    <div>Email: <a href="mailto:">{{ itemInfo.user.email }}</a></div>
    <div>Phone Number: {{ itemInfo.user.phone }}</div>
    <div>Address: {{ itemInfo.user.address.address1 }} {{ itemInfo.user.address.city }}, {{ itemInfo.user.address.state }} {{ itemInfo.user.address.zip }}</div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Item',
    props: {
      itemID: {
        type: Number,
        required: true
      }
    },
    components: {
    },
    methods: {
    },
    computed: {
    },
    mounted () {
      let window = this
      axios({
        method: 'get',
        url: 'https://www.weberclassifieds.website/rest_service/listings/' + this.itemID,
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
          user: {
            address: ''
          }
        }
      }
    }
  }
</script>
