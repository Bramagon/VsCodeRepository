import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginUser: EventEmitter<any> = new EventEmitter();
  name: string;
  password: string;
  service: UserService;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const user = {
      name: this.name,
      password: this.password
    };

    this.loginUser.emit(user);

  }
}
