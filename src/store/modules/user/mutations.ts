import { IUser, IUserState } from './types';

export default {
  setUser(state: IUserState, user: IUser): void {
    state.user = user;
  }
}