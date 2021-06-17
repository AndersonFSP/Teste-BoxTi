<template>
  <section>
    <hello-world />
    <Search @search="onSearch"/>
    <UserCard/>
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

  

  methods: {
     ...mapActions(['getUser', 'getRepositories']),

    onSearch(value: string): void {
      const name: string = value;
      this.getUser(name);
      this.getRepositories(name);
    }
  },
})
</script>
