import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  
  /*Class Properties*/
  baseUrl: string = 'http://david-spring-2018-phortonssf.c9users.io:8080/api/appUsers/';
  baseToken: string = '?access_token=';
  isLoggedIn: BehaviorSubject<boolean>;
  
  /*Class Constructor*/
  constructor(private _http: HttpClient) { 
    this.isLoggedIn = new BehaviorSubject(false);
  }
  
  //login state-management//
  loginStatus(loginState){
    console.log("hit", loginState)
    this.isLoggedIn.next(loginState)
  }

  /*Registers User*/  
  registerUser(user){
    return this._http.post(this.baseUrl, user)
  }
  
  /*Logs in User*/
  login(user){
    return this._http.post(this.baseUrl + "login", user)
  }
  
  /*Logs out User*/
  logOut(){
    sessionStorage.clear();
    let token = sessionStorage.getItem('token');
    return this._http.post(this.baseUrl + "logout" + this.baseToken + token, {})
  }
}

