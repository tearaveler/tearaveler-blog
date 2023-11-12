<script lang="ts">
  export default {
    data: () => ({
      tab: '',
    }),
  }
</script>

<template>
  <v-app>
    <!--default-bar/-->
    <v-card class="page-card">
      <v-img
        class="align-end text-white"
        height="300"
        src="/title.jpg"
        cover
      >
        <v-card-title class="text-center justify-center py-6 title-font">t(ea)raveler</v-card-title>    
      </v-img>
      <v-tabs v-model="tab" bg-color="secondary" align-tabs="center">
        <v-tab to="/" value="one">Home</v-tab>
        <v-tab to="/next" value="two">Destinations</v-tab>
        <v-tab to="/further" value="three">Blog</v-tab>
        <v-tab to="/further" value="three">Contact</v-tab>
      </v-tabs>
  
      <v-card-text class="card-bg">
        <v-window v-model="tab">
          <v-window-item value="one">
            <default-view/>            
          </v-window-item>
  
          <v-window-item value="two">
            Two
          </v-window-item>
  
          <v-window-item value="three">
            Three
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>

<style>
/* Helper classes */
.page-card {
  height: 100% !important;
  background-color: inherit;
}
.card-bg {
  height: inherit;
  margin-top: 2%;
  justify-content: center;
  align-content: center;
}
.title-font {
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: xx-large !important;
}
</style>