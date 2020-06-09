import { User } from './../../Models/User';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;


  constructor(private userService: UserService) { }


  ngOnInit(): void {
  }

  onLogout(user) {
    localStorage.removeItem('token');
    console.log('removed');
  }

}
