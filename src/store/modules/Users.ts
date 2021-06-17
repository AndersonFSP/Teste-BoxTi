import { api as axios } from '@/service/axios';
import { AxiosResponse } from 'axios';
import { ActionContext, Commit } from 'vuex';


interface IState{
  user: Object
}


const state = {
  user: {}
}

const getters = {
  users: (state: IState) => state.user
}

const actions = {
  async getUser({ commit }: { commit: Commit }, name: string): Promise<void> {
    const response: AxiosResponse =  await axios.get(`/users/${name}`);
    console.log(response);
    const user = response.data;
    commit('setUser', user);
  }
}

const mutations = {
  setUser(state: IState, user: any) {
    console.log(user)
    state.user = user;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}