<template>
   <v-data-table
    :headers="headers"
    :items="repositories"
    class="elevation-1"
    v-if="repositories.length"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Repositórios</v-toolbar-title>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-btn
        fab
        small
        outlined
        target="_blank"
        color="teal"
        :href="item.html_url"
      >
        <v-icon small>mdi-plus</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class RepositoriesTable extends Vue {
  options = {}
  headers = [
    { text: 'Nome', align: 'start', value: 'name' },
    { text: 'Linguagem', value: 'language' },
    { text: 'Forks', value: 'forks' },
    { text: 'Watchers', value: 'watchers' },
    { text: 'Issues abertas', value: 'open_issues' },
    { text: 'Visualizar', value: 'action' },
  ]
    
  @Getter('repositories') repositories!: Object
}
</script>