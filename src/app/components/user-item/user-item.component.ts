import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Output() deleteUser: EventEmitter<User> = new EventEmitter();

  constructor(private userService: UserService) { }


  ngOnInit(): void {
  }

  onDelete(user) {
    this.deleteUser.emit(user);
  }

}
