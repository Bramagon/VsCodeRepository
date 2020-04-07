import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/User';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = 'https://i346784core.venus.fhict.nl/api/Users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}`);
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.userUrl}/${user.id}`;
    return this.http.delete<User>(url, httpOptions);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions);
  }
}
