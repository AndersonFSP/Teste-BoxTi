import { IRespositoriesState } from './types';

export default {
  repositories(state: IRespositoriesState): Object {
    return state.repositories;
  }
}