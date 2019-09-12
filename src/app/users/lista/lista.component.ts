import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  users: User[] = [];

  constructor(public userServices: UserService) {
  }

  ngOnInit() {
    this.userServices.getUsers()
      .subscribe(data => {
        this.users = data;
      });
  }

}
