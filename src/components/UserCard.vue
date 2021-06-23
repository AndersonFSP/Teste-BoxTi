<template>
  <v-card
      class="mx-auto"
      max-width="344"
      v-if="!userObjectEmpty"
  >
    <v-img
      :src="user.avatar_url"
      height="300px"
    />

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ user.bio }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Mais informações
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>Total de repositórios públicos: {{user.public_repos}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>Seguidores: {{ user.followers }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>Seguindo: {{ user.following }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
        <v-btn
          text
          color="teal accent-4"
          target="_blank"
          :href="user.html_url"
        >
          Ver Perfil 
        </v-btn>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { IUser } from '@/store/modules/user/types';
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class  UserCard extends Vue {
  show: boolean = false;
 
  @Getter('user') user!: IUser; 
  
  get userObjectEmpty(): boolean {
    return Object.keys(this.user).length === 0;
  }

  get title(): string {
    return this.user.name ? this.user.name : this.user.login; 
  }
 
}
</script>