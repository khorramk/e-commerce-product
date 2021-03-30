<template>
  <v-app>
    <v-main>
      <h1 class="text-center">DIY TOOLS</h1>
      <Grid/>
    </v-main>
  </v-app>
</template>

<script>
import Grid from './Grid';
export default {
  name: 'App',

  components: {
    Grid
  },

  data: () => ({
    //
  }),
};
</script>
