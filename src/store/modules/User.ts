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
    try {
      const response: AxiosResponse =  await axios.get(`/users/${name}`);
      console.log(response);
      const user = response.data;
      commit('setUser', user);
    }
    catch(err) {
      console.log(err)
    }
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