import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from './api-call.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockDataService { 
  
  /*Class Properties*/
  baseUrl: string = 'http://david-spring-2018-phortonssf.c9users.io:8080/api/appUsers/';
  baseTokenStocks: string = '/stocks?access_token=';
  
  //stock-data
  stockArray: BehaviorSubject<any[]>;
  timesArray: BehaviorSubject<any[]>;
  stockSymbol: BehaviorSubject<string>;
  date: any;
  
  //setting stock data equal to subject Observable
  constructor(private _http: HttpClient,
              private _apiCall: ApiCallService){
    this.stockArray = new BehaviorSubject([]);
    this.timesArray =  new BehaviorSubject([]);
    this.stockSymbol =  new BehaviorSubject('');
  }
  
  //updating values
  updateStock(updatedStocks) {
        this.stockArray.next(updatedStocks);
    }
  updateTime(updatedTimes) {
        this.timesArray.next(updatedTimes);
    }
  updateSymbol(updatedSymbol) {
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
  
  getRecentData(objectArray){
    objectArray.map((object) => {
      object.data.splice(7);
      object.data.reverse();
    })
    return objectArray;
    }
  
  
  getRecentTimes(array){
    array.splice(7);
    array.reverse();
    for (let element of array){
      this.date = element.slice(10);
    };
    console.log(this.date);
    console.log(array);
    return array;
  }
  
  getData(stockSymbol){
    console.log("Stock-data sending symbol to Api service.")
    this._apiCall.getData(stockSymbol)
      .subscribe(data => {
        this.updateSymbol(stockSymbol);
        //format stockArray and send stockArray to StockDataService
        let stockArray = data;
        this.getRecentData(stockArray);
        this.updateStock(stockArray);
        
        //initialize, format, and send timesArray to StockDataService
        let timesArray = this._apiCall.timestamps;
        this.getRecentTimes(timesArray);
        this.updateTime(timesArray);
        
        //Notify console that data has been received 
        console.log("Received fully formatted data from API Service.");
        
    });
  }

}
