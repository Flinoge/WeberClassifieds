<template>
  <div>
    <div class="my-1 row">
      <div class="col-3">
        <ui-select :options="['10','25','50']" v-model="perPage" label="Items per Page" placeholder="10">
        </ui-select>
      </div>
      <div class="col-6">
        <ul class="pagination">
          <li class="cursor-pointer" :id="'page' + index" v-for="(page, index) in numPages" @click="switchPage(index)"
              v-bind:class="{ active: currentPage===index }"><a>{{index + 1}}</a></li>
        </ul>
      </div>
      <div class="col-3">
        <ui-button @click="openWeirdModal('createpost')">Create Post</ui-button>
      </div>
    </div>
    <table id="itemTable" class="table table-hover table-striped m-0">
      <thead>
      <tr>
        <th>Date Created</th>
        <th>Item</th>
        <th @click="sortPrice" class="cursor-pointer">Price <i class="fa fa-sort" aria-hidden="true"></i></th>
        <th>Location</th>
      </tr>
      </thead>
      <tbody class="cursor-pointer">
      <tr v-for="(item, index) in pages[currentPage]" @click="openModal('modal' + index)">
        <td>
          {{ item.listingCreationDateString }}
        </td>
        <td>
          <div class="col-12"><h3>{{ item.title }}</h3></div>
          <div class="col-12">{{ item.messageSummary }}...</div>
        </td>
        <td>${{ item.price }}</td>
        <td>{{ item.user.address.city }}</td>
      </tr>
      </tbody>
    </table>
    <ui-modal ref="createpost" title="Create a Listing" @close="updatePosts">
      <create-post :closeModal="closeWeirdModal"></create-post>
    </ui-modal>
    <ui-modal size="large" v-for="(item, index) in pages[currentPage]" :ref="'modal' + index" :title="item.title">
      <item :itemID="item.id"></item>
    </ui-modal>
  </div>
</template>

<script>
  import UiSelect from 'keen-ui/src/UiSelect.vue'
  import UiModal from 'keen-ui/src/UiModal.vue'
  import UiFab from 'keen-ui/src/UiFab.vue'
  import CreatePost from '../views/CreatePost.vue'
  import UiButton from 'keen-ui/src/UiButton.vue'
  import Item from '../components/item.vue'
  import axios from 'axios'

  export default {
    name: 'Items',
    props: {
      to: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      photos: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      },
      from: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      keyWord: {
        type: String,
        required: true
      }
    },
    components: {
      UiButton,
      UiSelect,
      UiModal,
      UiFab,
      Item,
      CreatePost
    },
    methods: {
      openWeirdModal (ref) {
        this.$refs[ref].open()
      },
      closeWeirdModal (ref) {
        this.$refs[ref].close()
      },
      openModal (ref) {
        this.$refs[ref][0].open()
      },
      closeModal (ref) {
        console.log('Close Modal')
        this.$refs[ref][0].close()
      },
      sortPrice () {
        if (this.priceSort) {
          this.items.sort(function (a, b) {
            return a.price - b.price
          })
          this.priceSort = false
        } else {
          this.items.sort(function (a, b) {
            return b.price - a.price
          })
          this.priceSort = true
        }
      },
      switchPage (index) {
        this.currentPage = index
      },
      iconColor (type) {
        if (type === 'For Sale') {
          return 'primary'
        } else {
          return 'accent'
        }
      },
      changeItems (type) {
        axios({
          method: 'get',
          url: 'https://www.weberclassifieds.website/rest_service/listings?minPrice=' + this.from + '&state=' + this.state + '&searchTime=' + this.time + '&city=' + this.city + '&maxPrice=' + this.to + '&type=' + this.type + '&category=' + this.category + '&keyWord=' + this.keyWord,
          headers: {
            authToken: localStorage.getItem('cert')
          }
        }).then(response => {
          this.items = response.data
        }).catch(error => {
          console.log(error)
        })
      },
      updatePosts () {
        axios({
          method: 'get',
          url: 'https://www.weberclassifieds.website/rest_service/listings?minPrice=' + this.from + '&searchTime=' + this.time + '&city=' + this.city + '&maxPrice=' + this.to + '&type=' + this.type + '&category=' + this.category + '&keyWord=' + this.keyWord,
          headers: {
            authToken: localStorage.getItem('cert')
          }
        }).then(response => {
          this.items = response.data
        }).catch(error => {
          console.log(error)
        })
      }
    },
    computed: {
      numPages () {
        let numPages = []
        for (let i = 0; i < this.items.length / this.perPage; i++) {
          numPages.push('')
        }
        return numPages
      },
      pages () {
        let pages = []
        let currentPage = -1
        for (let i = 0; i < this.items.length; i++) {
          if (i % this.perPage === 0) {
            pages.push([])
            currentPage++
          }
          pages[currentPage].push(this.items[i])
        }
        return pages
      }
    },
    mounted () {
      axios({
        method: 'get',
        url: 'https://www.weberclassifieds.website/rest_service/listings?minPrice=' + this.from + '&searchTime=' + this.time + '&city=' + this.city + '&maxPrice=' + this.to + '&type=' + this.type + '&category=' + this.category + '&keyWord=' + this.keyWord,
        headers: {
          authToken: localStorage.getItem('cert')
        }
      }).then(response => {
        this.items = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    watch: {
      time: function (val) {
        this.changeItems(val)
      },
      to: function (val) {
        this.changeItems(val)
      },
      category: function (val) {
        this.changeItems(val)
      },
      photos: function (val) {
        this.changeItems(val)
      },
      type: function (val) {
        this.changeItems(val)
      },
      from: function (val) {
        this.changeItems(val)
      },
      city: function (val) {
        this.changeItems(val)
      },
      state: function (val) {
        this.changeItems(val)
      },
      keyWord: function (val) {
        this.changeItems(val)
      }
    },
    data () {
      return {
        currentPage: 0,
        perPage: 10,
        priceSort: true,
        items: []
      }
    }
  }
</script>
