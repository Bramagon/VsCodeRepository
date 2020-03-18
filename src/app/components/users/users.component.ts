import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(user: User) {
    this.users = this.users.filter(usr => usr.id !== user.id);
    this.userService.deleteUser(user).subscribe();
  }

  addUser(user: User) {
    this.userService.addUser(user).subscribe(usr => {
      this.users.push(usr);
    });
  }
}
