import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'https://jmm-spring-api-h2-angular.herokuapp.com/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private htpp: HttpClient) { }

  login(username: string, password: string): Observable <any> {
    return this.htpp.post(AUTH_API + 'singin', {
      username,
      password
    }, httpOptions);
  }


  register(username: string, password: string): Observable<any> {
    return this.htpp.post(AUTH_API + 'singup', {
      username,
      password
    }, httpOptions);
  }
}
