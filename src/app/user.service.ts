import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  
  /*Class Properties*/
  baseUrl: string = 'http://david-spring-2018-phortonssf.c9users.io:8080/api/appUsers/';
  baseToken: string = '?access_token=';
  baseTokenStocks: string = '/stocks?access_token=';
  
  /*Class Constructor*/
  constructor(private _http: HttpClient) { }

  /*Regiasters User*/  
  registerUser(user){
    return this._http.post(this.baseUrl, user)
  }
  
  /*Logs in User*/
  login(user){
    return this._http.post(this.baseUrl + "login", user)
  }
  
  /*Logs out User*/
  logOut(user){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    let token = sessionStorage.getItem('token');
    return this._http.post(this.baseUrl + "logout" + this.baseToken + token)
  }
  
  /*Adds stock "ticker" to persistent model*/
  addStock(ticker){
    let userId = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('token');
    console.log("userId: ", userId)
    console.log("token: ", token)
    return this._http.post(this.baseUrl + userId + this.baseToken + token, ticker) 
  }
  
}

