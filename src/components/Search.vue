<template>
  <form @submit.prevent="searchContent">
    <v-row>
      <v-col md="10" >
        <v-text-field 
          label="Nome"
          :loading="loading"
          placeholder="Digite o nome do usuário"
          v-model="search"
        />
      </v-col>
      <v-col md="2" >
        <v-btn
          tile
          color="success"
          class="mt-3"
          type="submit"
          :disabled="btnDisable"
        >
          Buscar
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Search extends Vue {
  @Prop() loading: boolean = false;
 
  search: string = "";  
  
  get btnDisable(): boolean {
    return !Boolean(this.search);
  }
 
  @Emit('search')
  searchContent(): string {
    return this.search;
  }
}
</script>