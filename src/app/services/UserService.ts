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
export class UserService {
  userUrl: string = 'https://i346784core.venus.fhict.nl/api/Users';
  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    const url = `${this.userUrl}/GetUser`;
    return this.http.get<User>(url, httpOptions).pipe(share(), map(res => res));
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.userUrl}/${user.id}`;
    return this.http.delete<User>(url, httpOptions).pipe(share(), map(res => res));
  }

  addUser(user: User): Observable<User> {
    const url = `${this.userUrl}/PostUser`;
    return this.setToken(this.http.post<User>(url, user, httpOptions).pipe(share(), map(res => res)));
  }

  loginUser(user: User): Observable<User> {
    const url = `${this.userUrl}/Login`;
    return this.setToken(this.http.post<User>(url, user, httpOptions).pipe(share(), map(res => res)));
  }

  setToken(user: Observable<User>): Observable<User> {
    user.subscribe(u => localStorage.setItem('token', JSON.stringify(u.token)));
    return user;
  }
}

