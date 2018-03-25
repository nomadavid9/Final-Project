import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StockDataService { 
  
  /*Class Properties*/
  baseUrl: string = 'http://david-spring-2018-phortonssf.c9users.io:8080/api/appUsers/';
  baseTokenStocks: string = '/stocks?access_token=';
  stockArray: any[];
  timesArray: any[];
  
  constructor(private _http: HttpClient){}
  
  /*Adds stock "ticker" to persistent model*/
  addStock(ticker){
    let userId = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('token');
    console.log("userId: ", userId)
    console.log("token: ", token)
    return this._http.post(this.baseUrl + userId + this.baseTokenStocks + token, ticker) 
  }
  
  

}
