import { User } from './../../Models/User';
import { Observable } from 'rxjs';
import { UserService } from '../../services/UserService';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  loginMessage: string;
  user$: Observable<User>;
  constructor(private userService: UserService) { }
  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.user$ = this.userService.getUser();
    }
  }

  refreshComponent(user: User) {
      window.location.reload();
  }

  onLogout(user) {
    localStorage.removeItem('token');
    console.log('removed');
    window.location.reload();
  }

}
