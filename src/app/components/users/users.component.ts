import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(usr => {
      this.user = usr;
    });
  }

  logoutUser(user: User) {
    this.userService.logOut();
  }

  addUser(user: User) {
    this.userService.addUser(user).subscribe();
  }

  loginUser(user: User) {
    this.userService.loginUser(user).subscribe(
      (usr => this.user = usr)
    );
  }
}
