import { api as axios } from '@/service/axios';
import { ActionContext } from 'vuex';
import { IUserState } from './types';

export default {
  async getUser(store: ActionContext<IUserState, any>, name: string): Promise<void> {
    const { data } = await axios.get(`/users/${name}`);
    store.commit('setUser', data);
  }
}