<template>
   <v-data-table
    :headers="headers"
    :items="repositories"
    class="elevation-1"
    v-if="repositories.length"
  >
    <template v-slot:item.language="{ item }">
      <v-chip
        color="secondary"
        dark
      >
        {{ item.language }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
    data () {
      return {
        options: {},
        headers: [
          {
            text: 'Nome',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Linguagem', value: 'language' },
          { text: 'Forks', value: 'forks' },
          { text: 'Watchers', value: 'watchers' },
          { text: 'Issues abertas', value: 'open_issues' },
        ],
      }
    },
    computed: {
     ...mapGetters(['repositories', 'user']),
    },
    methods: {
      ...mapActions(['getRepositories']),
    },
  })
</script>