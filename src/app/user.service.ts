import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  baseUrl: string = 'http://david-spring-2018-phortonssf.c9users.io:8080/api/appUsers/';
  baseToken: string = '/stocks?access_token=';
  
  login(user){
    return this._http.post(this.baseUrl + "login", user)
  }
  
  addStock(ticker){
    let userId = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('token');
    console.log("userId: ", userId)
    console.log("token: ", token)
    return this._http.post(this.baseUrl + userId + this.baseToken + token, ticker) 
  }
    
  registerUser(user){
    return this._http.post(this.baseUrl, user)
  }
}

