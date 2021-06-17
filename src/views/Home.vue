<template>
  <section>
    <hello-world />
    <Search @search="onSearch"/>
    <UserCard/>
    <v-snackbar
      v-model="snackbar"
      color="error"
      right
      :timeout="3000"
    >
    Usuário não encontrado
  </v-snackbar>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Search from '@/components/Search.vue';
import UserCard from '@/components/UserCard.vue'
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Home',
  
  components: {
    HelloWorld,
    Search,
    UserCard
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
      }catch(err) {
        this.snackbar = true;
      }
      this.getRepositories(name);
    }
  },
})
</script>
