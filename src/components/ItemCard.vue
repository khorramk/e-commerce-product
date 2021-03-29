  <template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="240"
      :src="imgSrc"
    ></v-img>

    <v-card-title class="text-center font-normal no-word-break">{{ itemName }}</v-card-title>

    <v-card-text>
        {{ description }}
    </v-card-text>
    <v-card-text class="text-left">
         <div class="my-4 subtitle-1">
        £ • {{ price }}

      </div>
      stock: {{ stockLevel }}

    </v-card-text>
    <v-card-text class="text-right">
        SKU: {{ sku }}
    </v-card-text>
  </v-card> 
</template>

<script>
export default {
    props: ['imgSrc', 'itemName', 'price', 'stockLevel', 'sku', 'description']
}
</script>

<style>
    .no-word-break {
        word-break: revert !important;
    }
    .font-normal {
        font-size: 17.25px  !important;
        font-weight: 400  !important;
    }
</style>