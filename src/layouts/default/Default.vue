<template>
  <v-app>
    <default-bar />
    <v-navigation-drawer>
      <v-list>
        <v-list-item link to="/"> Home</v-list-item>
        <v-list-item link to="/destinations" title="Destinations"></v-list-item>
        <v-list-item link to="/blog" title="Blog"></v-list-item>
        <v-list-item link to="/datasecurity" title="Data Security"></v-list-item>
        <v-list-item link to="/contact" title="Contact"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
