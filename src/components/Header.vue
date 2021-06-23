<template>
  <v-app-bar
    app
    color="secondary"
    dark
  >
    <div class="d-flex align-center ml-6">
      <h2>Github Api</h2>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>
