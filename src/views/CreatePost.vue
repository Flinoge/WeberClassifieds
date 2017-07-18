<template>
  <div class="createpost">
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
      <br>

      <div class="form-group">
        <div class="col-sm-12">
          <h6 style="color: grey;">Description</h6>
          <textarea class="form-group col-sm-12" style="height: 100px; max-height: 200px;"></textarea>
        </div>
      </div>

      <br>
      <br>
      <div class="form-group">
        <div class="col-sm-12">
          <ui-button color="primary" style="border-color: black; background-color: rgb(73, 38, 101);" raised
                     :size="size">Post listing
          </ui-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import UiTextbox from 'keen-ui/src/UiTextbox.vue'
  import UiSelect from 'keen-ui/src/UiSelect.vue'
  import UiButton from 'keen-ui/src/UiButton.vue'

  export default {
    name: 'full',
    components: {
      UiTextbox,
      UiSelect,
      UiButton
    },
    computed: {},
    methods: {},
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
        emailTouched: false,
        size: 'sm'
      }
    }
  }
</script>
