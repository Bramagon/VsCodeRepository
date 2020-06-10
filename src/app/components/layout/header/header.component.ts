import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/User';
import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) { }


  ngOnInit(): void {


  }
}
