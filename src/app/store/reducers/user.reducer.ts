import {User} from '../../models/user.model';
import * as fromUserActions from '../actions';

export interface UserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: UserState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function UserReducer(state = initState, actions: fromUserActions.userActions): UserState {
  switch (actions.type) {
    case fromUserActions.CARGAR_USUARIO:
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromUserActions.CARGAR_USUARIO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: actions.usuario
      };
    case fromUserActions.CARGAR_USUARIO_FAIL:
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
