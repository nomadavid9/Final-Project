import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class StockDataService { 
  
  /*Class Properties*/
  baseUrl: string = 'http://david-spring-2018-phortonssf.c9users.io:8080/api/appUsers/';
  baseTokenStocks: string = '/stocks?access_token=';
  
  //stock-data
  stockArray: BehaviorSubject<any>;
  timesArray: BehaviorSubject<any>;
  stockSymbol: BehaviorSubject<any>;
  
  //setting stock data equal to subject Observable
  constructor(private _http: HttpClient){
    this.stockArray = new BehaviorSubject([]);
    this.timesArray =  new BehaviorSubject([]);
    this.stockSymbol =  new BehaviorSubject('');
  }
  
  //updating values
  updatedStock(updatedStocks) {
        this.stockArray.next(updatedStocks);
    }
  updatedTime(updatedTimes) {
        this.timesArray.next(updatedTimes);
    }
  updatedSymbol(updatedSymbol) {
      this.stockSymbol.next(updatedSymbol);
  }
  
  /*Adds stock "ticker" to persistent model*/
  addStock(ticker){
    let userId = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('token');
    console.log("userId: ", userId)
    console.log("token: ", token)
    return this._http.post(this.baseUrl + userId + this.baseTokenStocks + token, ticker) 
  }
  
  
  /**/
  
  

}
