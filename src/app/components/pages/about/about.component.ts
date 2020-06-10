import { User } from './../../../Models/User';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
