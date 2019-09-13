import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import * as userActions from '../../store/actions';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  user: User = null;
  loadin: boolean;
  error: any;


  constructor(private router: ActivatedRoute, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.router.params
      .subscribe(params => {
        const id = params['id'];
        this.store.dispatch(new userActions.CargarUsuario(id));
      });
    this.store.select('user')
      .subscribe(resp => {
        this.user = resp.user;
        this.loadin = resp.loading;
        this.error = resp.error;
      });
  }

}
