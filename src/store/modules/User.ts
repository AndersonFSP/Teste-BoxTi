import { api as axios } from '@/service/axios';
import { AxiosResponse } from 'axios';
import { Commit } from 'vuex';


interface IState{
  user: Object
}


const state = {
  user: {}
}

const getters = {
  user: (state: IState) => state.user
}

const actions = {
  async getUser({ commit }: { commit: Commit }, name: string): Promise<void> {
      const response: AxiosResponse =  await axios.get(`/users/${name}`);
      const user = response.data;
      commit('setUser', user);
  }
}

const mutations = {
  setUser(state: IState, user: any) {
    state.user = user;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}