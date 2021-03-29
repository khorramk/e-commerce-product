<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="(n, i) in items"
        :key="i"
        cols="12"
        sm="4"
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
    mounted() {
        this.fetchItems();
    },
    data: () => ({
        items: {}
    }),
    methods: {
        fetchItems() {
            axios.get('/products')
                .then((result) => {
                    this.items = result.data.data;
                }).catch((err) => {
                    console.log(err);
                });
        }
    }
}
</script>

<style>

</style>