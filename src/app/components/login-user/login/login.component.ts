import { Router, RouterModule } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/UserService';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginUser: EventEmitter<any> = new EventEmitter();
  service: UserService;
  show: boolean;
  nameForm: FormGroup;
  passwordForm: FormGroup;
  msg: string;
  
  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.msg = '';
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
    });

    this.nameForm = this.fb.group({
      name: [''],
    });
  }
  
  onSubmit() {
    if (this.nameForm.value.name != null && this.passwordForm.value.password != null) {
    const user = {
      name: this.nameForm.value.name,
      password: this.passwordForm.value.password
    };
    this.loginUser.emit(user);
  } 
  else {
  }
    this.msg = 'Invalid credentials';
  }

  showPass() {
    this.show = !this.show;
  }
}
