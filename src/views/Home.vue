<template>
  <v-container>
    <InfoJumbotron>
      <Search @search="onSearch" :loading="load"/>
    </InfoJumbotron>
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
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({
  components: {
    Search: () => import('@/components/Search.vue'),
    UserCard: () => import('@/components/UserCard.vue') ,
    RepositoriesTable: () => import('@/components/RepositoriesTable.vue'),
    InfoJumbotron: () => import('@/components/Jumbotron.vue')
  }
})
export default class Home extends Vue {
  snackbar: boolean = false;
  load: boolean = false;

  @Action('getUser') getUser: any;
  @Action('getRepositories') getRepositories: any;
  
  async onSearch(name: string): Promise<void> {
    this.load = true;

    try {
      await this.getUser(name);
      await this.getRepositories(name);
    }catch {
      this.snackbar = true;
    }finally {
      this.load = false;
    }
  }
  
}
</script>
