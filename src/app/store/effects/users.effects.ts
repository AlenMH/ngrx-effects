import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as usersActions from '../actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {UserService} from '../../services/user.service';
import {of} from 'rxjs';

@Injectable()

export class UsersEffects {
  constructor(private actions$: Actions, public userServices: UserService) {
  }

  updateUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.CARGAR_USUARIOS),
      switchMap(() => {
        return this.userServices.getUsers()
          .pipe(
            map(users => new usersActions.CargarUsuariosSucces(users)),
            catchError(err => of(new usersActions.CargarUsuariosFail(err)))
          );
      })
    )
  );
}
