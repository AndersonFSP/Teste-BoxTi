<template>
  <v-container>
    <form @submit.prevent="searchContent">
      <v-row>
        <v-col md="8" xs="12">
          <v-text-field 
            label="Nome"
            :loading="false"
            placeholder="Digite o nome do usuário"
            v-model="search"
          />
        </v-col>
        <v-col md="4" xs="12">
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
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Search',
  data: () => ({
    search: "" as string   
  }),

  computed: {
    btnDisable(): boolean {
      return !Boolean(this.search);
    }
  },

  methods: {
    searchContent(): void {
      this.$emit("search", this.search)
    }
  }
 
})
</script>

<style>

</style>