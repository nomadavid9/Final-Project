import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { filter, map, reduce, pluck } from 'rxjs/operators';

@Injectable()
export class ApiCallService {
  
  //build URL to be called by HttpClient
    base_url: string = 'https://www.alphavantage.co/query?function='
    timeSeries: string = 'TIME_SERIES_INTRADAY'
  
    base_symbol: string = '&symbol='
    symbol: string = ''
  
    base_interval: string = '&interval='
    interval: string = '60min';
  
    base_apiKey: string = '&apikey='
    apiKey: string = '0OOOD0F61M3YBRBV';
    
    //Obj Data
    stockObj: any;
                
  constructor(private http: HttpClient) { }
  
  getData(){
    console.log(this.symbol, "hit");
    let url = this.base_url + this.timeSeries + this.base_symbol +
              this.symbol + this.base_interval + this.interval +
              this.base_apiKey + this.apiKey;
    return this.http.get(url)
      .pipe(
        pluck("Time Series (60min)"),
        map( (data: any) => {
          console.log("before formatting: ", data);
          var stockHourly = [];
          for (let key in data){
            stockHourly.push(Object.entries(data[key]))
            console.log(stockHourly)
          }
          return stockHourly;
        })
        map( )
        
      )
  }
}
