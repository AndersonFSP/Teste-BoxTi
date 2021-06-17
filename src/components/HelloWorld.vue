<template>
  <v-container>
    <v-row class="text-center">
      <h1>Pesquisar perfil</h1>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({
  }),

  methods: {
    ...mapActions(['getUser']),
  },
})
</script>
