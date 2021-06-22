import { IUserState } from './types';

export default {
  setUser(state: IUserState, user: Object): void {
    state.user = user;
  }
}