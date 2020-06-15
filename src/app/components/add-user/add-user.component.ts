import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() addUser: EventEmitter<any> = new EventEmitter();
  name: string;
  password: string;
  show: boolean;

  constructor() { this.show = false; }

  ngOnInit(): void {
  }

  onSubmit() {
    const user = {
      name: this.name,
      password: this.password
    };

    this.addUser.emit(user);
  }

  showPass() {
    this.show = !this.show;
  }
}
