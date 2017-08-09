<template>
  <div class="listing">

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'listing',
    props: {
      listID: {
        type: String,
        required: true
      }
    },
    computed: {
      listing () {
        let APICall = []
        axios({
          method: 'get',
          url: 'https://www.weberclassifieds.website/rest_service/listing/' + this.listID,
          headers: {
            authToken: localStorage.getItem('cert')
          }
        }).then(response => {
          APICall = response.data
        }).catch(error => {
          console.log(error)
        })
        return APICall
      }
    },
    methods: {
    },
    data () {
      return {
      }
    }
  }
</script>
