import { Scoreboard } from './../Models/Scoreboard';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/User';
import { Observable, of } from 'rxjs';
import { shareReplay, map, share } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  scoreUrl: string = 'https://localhost:5001/api/Scores';
  constructor(private http: HttpClient) { }

  getTopScoreUser(): Observable<Scoreboard> {
    const url = `${this.scoreUrl}`;
    return this.http.get<Scoreboard>(url, httpOptions)
      .pipe(share(), map(res => res));
  }

  deleteScores(): Observable<Scoreboard> {
    const url = `${this.scoreUrl}`;
    return this.http.delete<Scoreboard>(url, httpOptions)
      .pipe(share(), map(res => res));
  }

  getTopScoreOverall(): Observable<Scoreboard> {
    const url = `${this.scoreUrl}/GetTopScores`;
    return this.http.get<Scoreboard>(url, httpOptions)
      .pipe(share(), map(res => res));
  }

  addScore(score: Scoreboard) {
    const url = `${this.scoreUrl}/PostTetrisScores`;
    return this.http.post<Scoreboard>(url, score, httpOptions).pipe(share(), map(res => res)).subscribe(s => console.log(s))
    
  }

}

