import { ActionContext } from "vuex";
import { IRespositoriesState } from "./types";
import { api as axios } from '@/service/axios';

export default {
  async getRepositories(state: ActionContext<IRespositoriesState, any>, name: string): Promise<void> {
    const { data } =  await axios.get(`/users/${name}/repos`);
    state.commit('setRepositories', data);
}
}