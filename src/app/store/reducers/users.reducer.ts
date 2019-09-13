import {User} from '../../models/user.model';
import * as fromUsersActions from '../actions';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function UsersReducer(state = initState, actions: fromUsersActions.usersActions): UsersState {
  switch (actions.type) {
    case fromUsersActions.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromUsersActions.CARGAR_USUARIOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...actions.usuarios]
      };
    case fromUsersActions.CARGAR_USUARIOS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: actions.payload.status,
          message: actions.payload.message,
          url: actions.payload.url
        }
      };
    default:
      return state;
  }
}
