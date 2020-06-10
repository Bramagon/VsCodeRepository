import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
