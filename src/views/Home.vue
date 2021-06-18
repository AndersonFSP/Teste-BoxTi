<template>
  <v-container>
    <Search @search="onSearch"/>
    <v-row>
      <v-col md="4" xs="12">
        <UserCard/>
      </v-col>
       <v-col md="8" xs="12">
         <RepositoriesTable/>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="snackbar"
      color="error"
      right
      :timeout="3000"
    >
    Usuário não encontrado
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Search from '@/components/Search.vue';
import UserCard from '@/components/UserCard.vue';
import RepositoriesTable from '@/components/RepositoriesTable.vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Home',
  
  components: {
    Search,
    UserCard,
    RepositoriesTable
  },
  
   data: () => ({
    snackbar: false,
  }),

  methods: {
     ...mapActions(['getUser', 'getRepositories']),

     async onSearch(value: string): Promise<void> {
      const name: string = value;
      try {
        await this.getUser(name);
        await this.getRepositories(name);
      }catch(err) {
        this.snackbar = true;
      }
    }
  },
})
</script>
