import { IRespositoriesState } from './types';

export default {
  setRepositories(state: IRespositoriesState, repositories: Object) {
    state.repositories = repositories;
  },
}