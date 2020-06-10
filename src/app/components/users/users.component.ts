import { UserItemComponent } from './../user-item/user-item.component';
import { UserService } from '../../services/user.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private useritem: UserItemComponent) { }

  user: User;
  ngOnInit(): void {}


  addUser(user: User) {
    this.userService.addUser(user).subscribe();
    this.loginUser(user);
  }

  loginUser(user: User) {
    this.userService.loginUser(user).subscribe();
    this.userService.getUser().subscribe(u => this.useritem.user = u);
  }
}
