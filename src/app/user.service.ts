import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  baseUrl: string = 'http://david-spring-2018-phortonssf.c9users.io:8080/api/appUsers/';
  
  login(user){
      return this._http.post(this.baseUrl + "login",
      {email: user.email, password: user.password})
  }
  
  registerUser(user){
      return this._http.post(this.baseUrl, user)
  }
}
