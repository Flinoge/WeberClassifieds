<template>
  <div>
    <div class="my-1 row">
      <div class="col-6">
        <ui-select :options="['10','25','50']" v-model="perPage" label="Items per Page" placeholder="10">
        </ui-select>
      </div>
      <div class="col-6">
        <ul class="pagination">
          <li class="cursor-pointer" :id="'page' + index" v-for="(page, index) in numPages" @click="switchPage(index)" v-bind:class="{ active: currentPage===index }"><a>{{index + 1}}</a></li>
        </ul>
      </div>
    </div>
    <table id="itemTable" class="table table-hover table-striped m-0">
      <thead>
      <tr>
        <th>Item Type</th>
        <th>Item</th>
        <th @click="sortPrice" class="cursor-pointer">Price <i class="fa fa-sort" aria-hidden="true"></i></th>
        <th>Location</th>
      </tr>
      </thead>
      <tbody class="cursor-pointer">
      <tr v-for="(item, index) in pages[currentPage]" @click="openModal('modal' + index)">
        <td>
          <ui-fab
          :color="iconColor(item.type)"
          tooltip-position="top center"
          :tooltip="item.type"
          ></ui-fab>
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.location }}</td>
      </tr>
      </tbody>
    </table>
    <ui-modal v-for="(item, index) in pages[currentPage]" :ref="'modal' + index" :title="item.name">
      {{ item.price }}
    </ui-modal>
  </div>
</template>

<script>
  import UiSelect from 'keen-ui/src/UiSelect.vue'
  import UiModal from 'keen-ui/src/UiModal.vue'
  import UiFab from 'keen-ui/src/UiFab.vue'

  export default {
    name: 'Items',
    components: {
      UiSelect,
      UiModal,
      UiFab
    },
    methods: {
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
      switchPage (index) {
        this.currentPage = index
      },
      iconColor (type) {
        if (type === 'For Sale') {
          return 'primary'
        } else {
          return 'accent'
        }
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
    data () {
      return {
        items: [
          {
            name: 'Brand New Bike',
            price: 110,
            location: 'Ogden',
            type: 'For Sale',
            category: 'Auto Parts and Accessories',
            author: 'Flinoge',
            itemDescription: 'Almost new, barely used, selling for cheap because I have to move away.'
          }
        ],
        currentPage: 0,
        perPage: 10,
        priceSort: true
      }
    }
  }
</script>
