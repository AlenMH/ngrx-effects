import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

export const CARGAR_USUARIOS = '[Usuarios] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar usuarios fail';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar usuarios success';

export class CargarUsuarios implements Action {
  readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
  readonly type = CARGAR_USUARIOS_FAIL;

  constructor(public payload: any) {
  }
}

export class CargarUsuariosSucces implements Action {
  readonly type = CARGAR_USUARIOS_SUCCESS;

  constructor(public usuarios: User[]) {
  }
}

export type usersActions = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSucces;
