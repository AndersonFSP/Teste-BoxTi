<template>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex>
        <h3 class="display-2">Visualizar usuários do GitHub</h3>
        <span class="subheading">Projeto teste para BoxTI utilizando api do git hub</span>

        <v-divider class="my-3"></v-divider>

        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "InfoJumbotron"
})
</script>