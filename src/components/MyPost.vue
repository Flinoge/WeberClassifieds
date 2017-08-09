<template>
  <div class="item">
    <div class="container-fluid">

      <div class="form-group">
        <div class="col-sm-12">
          <ui-select
            floating-label
            label="Category"
            placeholder="Select a category"
            :options="['Announcements','Books and Media','Computers',
                'Electronics', 'For Trade or Barter', 'Free',
                'General']"
            v-model="itemInfo.category"
          ></ui-select>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <ui-textbox
            floating-label
            label="Title"
            placeholder="Enter the title of the post"
            error="This field is required"
            v-model="itemInfo.title"

            :invalid="titleTouched && itemInfo.title.length === 0"
            @touch="titleTouched = true"

            required
          ></ui-textbox>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <ui-textbox
            floating-label
            label="Price"
            placeholder="Enter your asking price"
            error="This field is required"
            v-model="itemInfo.price"

            :invalid="priceTouched && itemInfo.price.length === 0"
            @touch="priceTouched = true"

            required
          ></ui-textbox>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <ui-select
            floating-label
            label="Listing Type"
            placeholder="Select one"
            :options="['For Sale','In Search Of']"
            v-model="itemInfo.type"
          ></ui-select>
        </div>
      </div>
      <br>

      <div class="form-group">
        <div class="col-sm-12">
          <h6 style="color: grey;">Description</h6>
          <textarea class="form-group col-sm-12" style="height: 100px; max-height: 200px;" v-model="itemInfo.message"></textarea>
        </div>
      </div>

      <br>
      <div class="form-group">
        <div class="col-sm-12">
          <ui-button color="primary" style="border-color: black; background-color: rgb(73, 38, 101);" raised
                     :size="size" @click="saveListing">Save listing
          </ui-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import UiTextbox from 'keen-ui/src/UiTextbox.vue'
  import UiButton from 'keen-ui/src/UiButton.vue'
  import UiSelect from 'keen-ui/src/UiSelect.vue'

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
      UiButton,
      UiSelect
    },
    methods: {
      saveListing () {
        axios({
          method: 'put',
          url: 'https://www.weberclassifieds.website/rest_service/listings/' + this.itemID,
          headers: {
            authToken: localStorage.getItem('cert')
          },
          data: {
            id: this.itemID,
            title: this.itemInfo.title,
            message: this.itemInfo.message,
            user: {id: localStorage.getItem('userid')},
            price: this.itemInfo.price,
            type: this.itemInfo.listtype,
            category: this.itemInfo.category
          }
        }).then(response => {
        }).catch(error => {
          console.log(error)
        })
      }
    },
    computed: {
    },
    mounted () {
      axios({
        method: 'get',
        url: 'https://www.weberclassifieds.website/rest_service/listings/' + this.itemID,
        headers: {
          authToken: localStorage.getItem('cert')
        }
      }).then(response => {
        this.itemInfo = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    data () {
      return {
        itemInfo: {
          user: '',
          title: '',
          message: '',
          price: '',
          type: '',
          category: ''
        },
        titleTouched: false,
        priceTouched: false,
        size: 'sm'
      }
    }
  }
</script>
