import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import * as usersActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  users: User[] = [];
  loadin: boolean;
  error: any;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('users')
      .subscribe(resp => {
        this.users = resp.users;
        this.loadin = resp.loading;
        this.error = resp.error;
      });
    this.store.dispatch(new usersActions.CargarUsuarios());

  }

}
