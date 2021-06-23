import { IUserState, IUser } from './types';

export default {
  user(state: IUserState ): IUser {
    return state.user;
  }
}