<template>
  <div class="item">
    <div>{{ itemInfo.category }}</div>
    <div>{{ itemInfo.id }}</div>
    <div>{{ itemInfo.message }}</div>
    <div>{{ itemInfo.price }}</div>
    <div>{{ itemInfo.title }}</div>
    <div>{{ itemInfo.type }}</div>
    <div>{{ itemInfo.user }}</div>
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
        url: 'https://g3project.sytes.net/weberclassifieds/listings/' + this.itemID,
        headers: {
          authToken: localStorage.getItem('cert')
        }
      }).then(response => {
        console.log(response)
        window.itemInfo = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    data () {
      return {
        itemInfo: []
      }
    }
  }
</script>
