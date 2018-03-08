import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class ApiCallService {

  base_url: string = 'https://www.alphavantage.co/query?function='
  timeSeries: string = 'TIME_SERIES_INTRADAY'
  
  base_symbol: string = '&symbol='
  symbol: string = 'MSFT'
  
  base_interval: string = '&interval='
  interval: string = '60min';
  
  base_apiKey: string = '&apikey='
  apiKey: string = '0OOOD0F61M3YBRBV';
  
  url: string = this.base_url + this.timeSeries + this.base_symbol +
                this.symbol + this.base_interval + this.interval +
                this.base_apiKey + this.apiKey;
                
  constructor(private http: HttpClient) { }
  
  getData(){
      console.log(this.url);
      return this.http.get(this.url)
  }
}
