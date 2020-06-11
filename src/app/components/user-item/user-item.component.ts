import { User } from './../../Models/User';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit{
  user: User;

  constructor(private userService: UserService) { }
    
  ngOnInit(){
    this.userService.getUser().subscribe(u => this.user = u);
  }

  refreshComponent(user: User){
    user = user;
    window.location.reload();
  }

  onLogout(user) {
    localStorage.removeItem('token');
    console.log('removed');
    window.location.reload();
  }

}
