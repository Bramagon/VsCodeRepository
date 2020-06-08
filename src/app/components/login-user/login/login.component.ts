import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  service: UserService;
  name: string;
  password: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.loginUser(new User(this.name, this.password));
  }
  onCreate(){

  }
}
