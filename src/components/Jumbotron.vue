<template>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex>
        <h3 class="display-2">Visualizar usuários do GitHub</h3>
        <span class="subheading">Projeto teste para BoxTI utilizando github api</span>

        <v-divider class="my-3"></v-divider>

        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class InfoJumbotron extends Vue {}
</script>