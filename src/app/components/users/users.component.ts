import { UserItemComponent } from './../user-item/user-item.component';
import { UserService } from '../../services/UserService';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private useritem: UserItemComponent) { }
  loginMessage: string;
  registerMessage: string;
  @Output() getUser: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {}


  addUser(user: User) {
    this.userService.addUser(user).subscribe((response) => 
      this.useritem.refreshComponent(response));
  }

  loginUser(user: User) {
    this.userService.loginUser(user).subscribe((response) => {
      this.useritem.refreshComponent(response) 
    }, (error) => {
      this.loginMessage = "Invalid credentials";
    });
  }
}
