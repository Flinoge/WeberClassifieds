<template>
  <div class="app">
    <topbar/>
    <div class="app-body">
      <main class="main">
        <div class="container-fluid">
          <br>
          <h4>General Information</h4>
          <hr>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-select
                floating-label
                label="Category"
                placeholder="Select a category"
                :options="['Announcements','Books and Media','Computers',
                'Electronics', 'For Trade or Barter', 'Free',
                'General']"
                v-model="category"
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
                v-model="title"

                :invalid="titleTouched && title.length === 0"
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
                v-model="price"

                :invalid="priceTouched && price.length === 0"
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
                v-model="category"
              ></ui-select>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="City"
                placeholder="Enter your city"
                error="This field is required"
                v-model="city"

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
                placeholder="Enter your state"
                error="This field is required"
                v-model="state"

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
                placeholder="Enter your zip"
                error="This field is required"
                v-model="zipcode"

                :invalid="zipcodeTouched && zipcode.length === 0"
                @touch="zipcodeTouched = true"

                required
              ></ui-textbox>
            </div>
          </div>

          <br>

          <div class="form-group">
            <div class="col-sm-12">
              <h6 style="color: grey;">Description</h6>
              <textarea class="form-group col-sm-12" style="height: 100px; max-height: 200px;"></textarea>
            </div>
          </div>




          <br>
          <h4>Contact Info</h4>
          <hr>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="Seller Name"
                placeholder="Enter your name"
                error="This field is required"
                v-model="name"

                :invalid="nameTouched && name.length === 0"
                @touch="nameTouched = true"

                required
              ></ui-textbox>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <ui-textbox
                floating-label
                label="Phone"
                placeholder="Enter your phone number"
                error="This field is required"
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
                label="Email Address"
                placeholder="Enter your email address"
                error="This field is required"
                v-model="email"

                :invalid="emailTouched && email.length === 0"
                @touch="emailTouched = true"

                required
              ></ui-textbox>
            </div>
          </div>

          <br>
          <br>
          <div class="form-group">
            <div class="col-sm-12">
              <ui-button color="primary" style="border-color: black; background-color: rgb(73, 38, 101);" raised :size="size">Post listing</ui-button>
            </div>
          </div>

          <br>
          <br>
          <br>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
  import topbar from '../components/Topbar.vue'
  import UiTextbox from 'keen-ui/src/UiTextbox.vue'
  import UiSelect from 'keen-ui/src/UiSelect.vue'
  import UiButton from 'keen-ui/src/UiButton.vue'

  export default {
    name: 'full',
    components: {
      topbar,
      UiTextbox,
      UiSelect,
      UiButton
    },
    computed: {
    },
    methods: {
    },
    data () {
      return {
        title: '',
        price: '',
        city: '',
        category: '',
        state: '',
        zipcode: '',
        name: '',
        phone: '',
        email: '',
        titleTouched: false,
        priceTouched: false,
        cityTouched: false,
        categoryTouched: false,
        stateTouched: false,
        zipcodeTouched: false,
        nameTouched: false,
        phoneTouched: false,
        emailTouched: false
      }
    }
  }
</script>
