import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as userActions from '../actions';
import {UserService} from '../../services/user.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()

export class UserEffects {
  constructor(private actions$: Actions, public userService: UserService) {
  }

  cargarUSer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.CARGAR_USUARIO),
      switchMap(action => {
        return this.userService.getUser(action['id'])
          .pipe(
            map(user => new userActions.CargarUsuarioSucces(user)),
            catchError(error => of(new userActions.CargarUsuarioFail(error)))
          );
      })
    )
  );

}
