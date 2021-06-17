<template>
  <v-container>
    <v-row class="text-center">
      <h1>Pesquisar perfil</h1>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { api as axios} from '../service/axios';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
  }),

  methods: {
    ...mapActions(['getUser']),
    
  },

  async mounted() {
    this.getUser("AndersonFSP");
  }
})
</script>
