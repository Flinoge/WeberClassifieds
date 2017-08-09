<template>
  <div class="sidebar">
    <div class="col-sm-12">
      <br>
      <ui-collapsible style="background-color: white; color: black;">
        <div slot="header" style="color: black;">
          Categories
        </div>
        <ui-radio-group
          name="category"
          vertical
          :options="['', 'Announcements','Books and Media','Computers',
                'Electronics', 'For Trade or Barter', 'Free',
                'General']"
          v-model="category"
          @change="categoryChange"
        ></ui-radio-group>

      </ui-collapsible>

      <ui-collapsible  style="background-color: white; color: black;">
        <div slot="header" style="color: black;">
          Price Range
        </div>

        <ui-textbox
          floating-label
          label="From"
          placeholder="From"
          v-model="from"
          @input="fromChange"
        ></ui-textbox>

        <ui-textbox
          floating-label
          label="To"
          placeholder="To"
          v-model="to"
          @input="toChange"
        ></ui-textbox>

      </ui-collapsible>

      <ui-collapsible  style="background-color: white; color: black;">
        <div slot="header" style="color: black;">
          Listing Photos
        </div>
        <ui-radio-group
          name="photos"
          vertical
          :options="['', 'Has Photos','No Photos']"
          v-model="photos"
          @change="photosChange"
        ></ui-radio-group>
      </ui-collapsible>

      <ui-collapsible  style="background-color: white; color: black;">
        <div slot="header" style="color: black;">
          Listing Type
        </div>
        <ui-radio-group
          name="type"
          vertical
          :options="['', 'For Sale','In Search Of']"
          v-model="type"
          @change="typeChange"
        ></ui-radio-group>
      </ui-collapsible>

      <ui-collapsible  style="background-color: white; color: black;">
        <div slot="header" style="color: black;">
          Listing Posted
        </div>
        <ui-radio-group
          name="time"
          vertical
          :options="['', 'Last Hour','Last 24 Hours', 'Last 7 Days', 'Last 30 Days']"
          v-model="time"
          @change="timeChange"
        ></ui-radio-group>
      </ui-collapsible>

      <ui-collapsible  style="background-color: white; color: black;">
        <div slot="header" style="color: black;">
          Location
        </div>

        <ui-textbox
          floating-label
          label="City"
          placeholder="Enter a city"
          v-model="city"
          @input="cityChange"
        ></ui-textbox>
        <ui-textbox
          floating-label
          label="State"
          placeholder="Enter a state"
          v-model="state"
          @input="stateChange"
        ></ui-textbox>
      </ui-collapsible>

      <br>
    </div>
  </div>
</template>

<script>
  import UiCollapsible from 'keen-ui/src/UiCollapsible.vue'
  import UiTab from 'keen-ui/src/UiTab.vue'
  import UiTabs from 'keen-ui/src/UiTabs.vue'
  import UiCheckbox from 'keen-ui/src/UiCheckbox.vue'
  import UiTextbox from 'keen-ui/src/UiTextbox.vue'
  import UiButton from 'keen-ui/src/UiButton.vue'
  import UiRadioGroup from 'keen-ui/src/UiRadioGroup.vue'

  export default {
    props: {
      toChange: {
        type: Function,
        required: true
      },
      categoryChange: {
        type: Function,
        required: true
      },
      photosChange: {
        type: Function,
        required: true
      },
      typeChange: {
        type: Function,
        required: true
      },
      timeChange: {
        type: Function,
        required: true
      },
      fromChange: {
        type: Function,
        required: true
      },
      cityChange: {
        type: Function,
        required: true
      },
      stateChange: {
        type: Function,
        required: true
      }
    },
    components: {
      UiCollapsible,
      UiTab,
      UiTabs,
      UiCheckbox,
      UiTextbox,
      UiButton,
      UiRadioGroup
    },
    data () {
      return {
        size: 'sm',
        city: '',
        state: '',
        from: '',
        to: '',
        category: '',
        photos: '',
        type: '',
        time: ''
      }
    },
    name: 'main'
  }
</script>
