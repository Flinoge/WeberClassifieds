<template>
  <div class="myposts">
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
        <td>{{ item.price }}</td>
        <td>{{ item.user.address.city }}</td>
      </tr>
      </tbody>
    </table>
    <ui-modal size="large" v-for="(item, index) in pages[currentPage]" :ref="'modal' + index" :title="item.title" @close="updatePosts">
      <my-post :itemID="item.id"></my-post>
    </ui-modal>
  </div>
</template>

<script>
  import axios from 'axios'
  import { UiSelect, UiButton, UiModal, UiFab } from 'keen-ui'
  import MyPost from '../components/MyPost.vue'

  export default {
    name: 'Item',
    props: {
    },
    components: {
      UiSelect,
      UiButton,
      UiModal,
      MyPost,
      UiFab
    },
    methods: {
      openWeirdModal (ref) {
        this.$refs[ref].open()
      },
      openModal (ref) {
        this.$refs[ref][0].open()
      },
      closeModal (ref) {
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
      updatePosts () {
        axios({
          method: 'get',
          url: 'https://www.weberclassifieds.website/rest_service/users/' + localStorage.getItem('userid') + '/listings',
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
        url: 'https://www.weberclassifieds.website/rest_service/users/' + localStorage.getItem('userid') + '/listings',
        headers: {
          authToken: localStorage.getItem('cert')
        }
      }).then(response => {
        this.items = response.data
      }).catch(error => {
        console.log(error)
      })
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
