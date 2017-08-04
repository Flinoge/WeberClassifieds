<template>
  <div class="app">
    <topbar :keyWordChange="keyWordChange"/>
    <div class="app-body">
      <sidebar :toChange="toChange" :categoryChange="categoryChange" :photosChange="photosChange" :typeChange="typeChange" :timeChange="timeChange" :fromChange="fromChange" :citystateChange="citystateChange"/>
      <main class="main">
        <div class="container-fluid">
          <router-view :to="to" :category="category" :photos="photos" :type="type" :time="time" :from="from" :citystate="citystate" :keyWord="keyWord"></router-view>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
  import sidebar from '../components/Sidebar.vue'
  import topbar from '../components/Topbar.vue'
  import items from '../components/items.vue'

  export default {
    name: 'full',
    components: {
      sidebar,
      topbar,
      items
    },
    computed: {
    },
    methods: {
      categoryChange (v) {
        this.category = v
      },
      citystateChange (v) {
        this.citystate = v
      },
      fromChange (v) {
        this.from = v
      },
      photosChange (v) {
        this.photos = v
      },
      typeChange (v) {
        this.type = v
      },
      timeChange (v) {
        this.time = v
      },
      keyWordChange (v) {
        this.keyWord = v
      },
      toChange (v) {
        this.to = v
      }
    },
    data () {
      return {
        example: 'Hi',
        citystate: '',
        from: '',
        to: '',
        category: '',
        photos: '',
        type: '',
        time: '',
        keyWord: ''
      }
    }
  }
</script>
