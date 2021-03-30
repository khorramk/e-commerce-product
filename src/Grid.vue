<template>
  <v-container class="grey">
      <v-row>
          <v-col 
          class="mx-auto pa-6 transition-swing" fixed-top>
              <label for="product_selection" class="text-h3">By Price:  </label>
            <select v-model="priceSelected" id="product_selection" class="elevation-1 pa-2">
                <option v-for="(foo, i) in products" :key="i" :value="foo.price">{{foo.price}}</option>
            </select>
          </v-col>
          <v-col 
          class="mx-auto pa-6 transition-swing" fixed-top>
              <label for="product_selection" class="text-h3">By SKU:  </label>
            <select v-model="skuSelected" id="product_selection" class="elevation-1 pa-2">
                <option v-for="(foo, i) in products" :key="i" :value="foo.sku">
                    {{foo.sku}}
                    </option>
            </select>
          </v-col>
      </v-row>
    <v-row no-gutter v-if="selectionRender && priceSelected !== 'Select'" >
        
      <v-col
        v-for="(n, i) in getProductsByPrice"
        :key="i"
        cols="12"
        sm="6"
      >
        <item-card
            :imgSrc="n.image"
            :itemName="n.name"
            :description="n.description"
            :price="n.price"
            :stockLevel="n['stock-level']"
            :sku="n.sku"
        />
      </v-col>
    </v-row>
    <v-row no-gutter v-if="selectionRender && skuSelected !== 'Select'" >
        
      <v-col
        v-for="(n, i) in getProductsBySKU"
        :key="i"
        cols="12"
        sm="6"
      >
        <item-card
            :imgSrc="n.image"
            :itemName="n.name"
            :description="n.description"
            :price="n.price"
            :stockLevel="n['stock-level']"
            :sku="n.sku"
        />
      </v-col>
    </v-row>
      <v-row no-gutter v-else >
        
      <v-col
        v-for="(n, i) in items"
        :key="i"
        cols="12"
        sm="6"
      >
        <item-card
            :imgSrc="n.image"
            :itemName="n.name"
            :description="n.description"
            :price="n.price"
            :stockLevel="n['stock-level']"
            :sku="n.sku"
        />
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import axios from 'axios';
import ItemCard from './components/ItemCard.vue';
export default {
    components: {
        ItemCard,
    },
    data: () => ({
        items: {},
        priceSelected: 'Select',
        selectionRender: false,
        skuSelected: 'Select',
        selectedSku: ''
    }),
    created() {
        this.fetchItems();
    },
    computed: {
        products(){
            let array = Object.keys(this.items).map((key) => this.items[key]);
           array.unshift({price: 'Select', sku: 'Select'})
            return array;
        },
        selection: {
            get() {
                return false
            },
            set(val) {
                this.selectionRender = val
            }
        },
        getProductsBySKU(){
            let array = this.products.filter((element) => element.sku === this.skuSelected)  || [];
            return array;
        },
        getProductsByPrice(){
            let array = this.products.filter((element) => element.price === this.priceSelected)  || [];
            return array;
        }
    },
    methods: {
        fetchItems() {
            axios.get('/products')
                .then((result) => {
                    this.items = result.data.data;
                }).catch((err) => {
                    console.log(err);
                });
        },
    },
    watch: {
        priceSelected() {
            this.selection = true;
        },
        skuSelected() {
            
            this.selection = true;
        }
    }
}
</script>

<style>
    .fixed-top {
        position: sticky;
    }
</style>