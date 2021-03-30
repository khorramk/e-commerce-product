<template>
  <v-card
    height="400"
    width="256"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
        <Sort/>
      
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import Sort from './components/Sort';
export default {
    components: {
        Sort
    }
}
</script>

<style>

</style>