import { Scoreboard } from './../../Models/Scoreboard';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/UserService';
import { Component, OnInit, Input } from '@angular/core';
import { ScoreService } from 'src/app/services/ScoreService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user$: Observable<User>;
  score$: Observable<Scoreboard>;
  highScore$: Observable<Scoreboard>;

  constructor(private userService: UserService, private scoreService: ScoreService) { }

  ngOnInit(): void {
    if (!this.notLoggedIn()) {
      this.user$ = this.userService.getUser();
      this.score$ = this.scoreService.getTopScoreUser();
      this.highScore$ = this.scoreService.getTopScoreOverall();
    }
  }

  notLoggedIn() {
    if (localStorage.getItem('token') === null) {
      return true;
    } else { return false; }
  }

}
