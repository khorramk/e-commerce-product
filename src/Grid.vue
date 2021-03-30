<template>
  <v-container class="grey">
      <v-row>
          <v-col 
          class="mx-auto pa-6 transition-swing" fixed-top>
              <label for="product_selection" class="text-h3">By Price:  </label>
            <select v-model="selected" id="product_selection" class="elevation-1 pa-2">
                <option v-for="(foo, i) in products" :key="i" :value="i">{{foo.price}}</option>
            </select>
          </v-col>
          <v-col 
          class="mx-auto pa-6 transition-swing" fixed-top>
              <label for="product_selection" class="text-h3">By SKU:  </label>
            <select v-model="selected" id="product_selection" class="elevation-1 pa-2">
                <option v-for="(foo, i) in products" :key="i" :value="i">{{foo.price}}</option>
            </select>
          </v-col>
      </v-row>
    <v-row no-gutter v-if="selectionRender" >
        
      <v-col
        v-for="(n, i) in getPriceList[selected]"
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
      <v-row no-gutter v-if="selectionRender === false" >
        
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
//TODO make emit and handle onleave event
//todo reset the page
<script>
import axios from 'axios';
import ItemCard from './components/ItemCard.vue';
export default {
    components: {
        ItemCard,
    },
    data: () => ({
        items: {},
        selected: 0,
        selectionRender: false
    }),
    created() {
        this.fetchItems();
    },
    computed: {
        getPriceList(){
            let array = Object.keys(this.items).map((k) => {
                return [
                    this.items[k]]});
           array.sort((a, b) => a - b);
           return array;
            },

        products(){
            let array = Object.keys(this.items).map((key) => this.items[key]);
            return array;
        },
        selection: {
            get() {
                return false
            },
            set(val) {
                this.selectionRender = val
            }
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
        selected() {
            this.selection = true
        }
    }
}
</script>

<style>
    .fixed-top {
        position: sticky;
    }
</style>