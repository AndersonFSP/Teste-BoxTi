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
  async mounted() {
    const response = await axios.get("users/AndersonFSP");
    console.log(response);
  }
})
</script>
