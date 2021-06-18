import { api as axios } from '@/service/axios';
import { AxiosResponse } from 'axios';
import { Commit } from 'vuex';


interface IState{
  repositories: Object
}


const state = {
  repositories: []
}

const getters = {
  repositories: (state: IState) => state.repositories
}

const actions = {
  async getRepositories({ commit }: { commit: Commit }, name: string): Promise<void> {
    try {
      const response: AxiosResponse =  await axios.get(`/users/${name}/repos`);
      console.log(response);
      const repositories = response.data;
      commit('setRepositories', repositories);
    }
    catch(err) {
      console.log(err)
    }
  }
}

const mutations = {
  setRepositories(state: IState, repositories: any) {
    state.repositories = repositories;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}