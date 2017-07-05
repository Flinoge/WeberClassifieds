<template>
  <div class="sidebar">
    <div class="col-sm-12">
      <ui-collapsible open style="background-color: white; color: black;">
        <div slot="header" style="color: black;">
          Categories
        </div>

        <ui-checkbox
          value="announcements"
          v-model="announcements"
          label="Announcements"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="appliances"
          v-model="appliances"
          label="Appliances"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="autoparts"
          v-model="autoparts"
          label="Auto Parts and Accessories"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="baby"
          v-model="baby"
          label="Baby"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="books"
          v-model="books"
          label="Books and Media"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="clothing"
          v-model="clothing"
          label="Clothing and Apparel"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="computers"
          v-model="computers"
          label="Computers"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="electronics"
          v-model="electronics"
          label="Electronics"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="trade"
          v-model="trade"
          label="For Trade or Barter"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="free"
          v-model="free"
          label="FREE"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="furniture"
          v-model="furniture"
          label="Furniture"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="general"
          v-model="general"
          label="General"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="toys"
          v-model="toys"
          label="Toys"
          color="accent"
        ></ui-checkbox>
      </ui-collapsible>

      <ui-collapsible open style="background-color: white; color: black;">
        <div slot="header" style="color: black;">
          Price Range
        </div>

        <ui-textbox
          floating-label
          label="From"
          placeholder="From"
          v-model="from"
        ></ui-textbox>

        <ui-textbox
          floating-label
          label="To"
          placeholder="To"
          v-model="to"
        ></ui-textbox>

      </ui-collapsible>

      <ui-collapsible open style="background-color: white; color: black;">
        <div slot="header" style="color: black;">
          Listing Photos
        </div>

        <ui-checkbox
          value="hasphotos"
          v-model="hasphotos"
          label="Has Photos"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="nophotos"
          v-model="nophotos"
          label="No Photos"
          color="accent"
        ></ui-checkbox>
      </ui-collapsible>

      <ui-collapsible open style="background-color: white; color: black;">
        <div slot="header" style="color: black;">
          Listing Type
        </div>

        <ui-checkbox
          value="forsale"
          v-model="forsale"
          label="For Sale"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="insearchof"
          v-model="insearchof"
          label="In search of"
          color="accent"
        ></ui-checkbox>
      </ui-collapsible>

      <ui-collapsible open style="background-color: white; color: black;">
        <div slot="header" style="color: black;">
          Listing Posted
        </div>

        <ui-checkbox
          value="lasthour"
          v-model="lasthour"
          label="Last Hour"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="last24"
          v-model="last24"
          label="Last 24 Hours"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="lastweek"
          v-model="lastweek"
          label="Last 7 Days"
          color="accent"
        ></ui-checkbox>

        <ui-checkbox
          value="last30"
          v-model="last30"
          label="Last 30 days"
          color="accent"
        ></ui-checkbox>
      </ui-collapsible>

      <ui-collapsible open style="background-color: white; color: black;">
        <div slot="header" style="color: black;">
          Location
        </div>

        <ui-textbox
          floating-label
          label="City/State"
          placeholder="Enter a city or state"
          v-model="citystate"
        ></ui-textbox>
      </ui-collapsible>
    </div>
  </div>
</template>

<script>
  import UiCollapsible from 'keen-ui/src/UiCollapsible.vue'
  import UiTab from 'keen-ui/src/UiTab.vue'
  import UiTabs from 'keen-ui/src/UiTabs.vue'
  import UiCheckbox from 'keen-ui/src/UiCheckbox.vue'
  import UiTextbox from 'keen-ui/src/UiTextbox.vue'

  export default {
    components: {
      UiCollapsible,
      UiTab,
      UiTabs,
      UiCheckbox,
      UiTextbox
    },
    data () {
      return {
        citystate: '',
        from: '',
        to: ''
      }
    },
    name: 'main'
  }
</script>
