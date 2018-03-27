import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { StockDataService } from '../stock-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  
  /*Class Constructor*/
  constructor(private _apiCall: ApiCallService, 
              private _stock: StockDataService) {}
  
   /*Gets formattedData array from service
  stores it in stockArray property 
  then calls getLastSevenData function on incoming array.*/
  getData(stockSymbol){
    this._stock.getData(stockSymbol);
  }
}
