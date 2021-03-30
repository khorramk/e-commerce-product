<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        cols="12"
        sm="6"
      >
        <v-subheader v-text="'Multiple with persistent hint'"></v-subheader>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="e6"
          :items="items"
          :menu-props="{ maxHeight: '400' }"
          label="Select"
          hint="Pick your favorite states"
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-subheader v-text="'Multiple (Chips) with persistent hint'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="e7"
          :items="items"
          label="Select"
          hint="What are the target regions"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
      props: ['items'],
     data () {
      return {
        e6: [],
        e7: [],
      }
    },
    watch: {
        e7(val) {
            console.log(val);
            this.$emit('product', val);
        }
    }
  }
</script>

<style>

</style>