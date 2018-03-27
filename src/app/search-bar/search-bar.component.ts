import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';
import { StockDataService } from '../stock-data.service';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  /*Class Properties*/
  stockSymbol: string;
  stockArray: any;
  timesArray: any;
  loader: boolean = false;
  
  /*Class Constructor*/
  constructor(private _apiCall: ApiCallService, private _stock: StockDataService,
              private _router: Router) {}

  /* Gets seven most recent values of each array within the 
  value property of each object within stockArray and returns 
  stockArray, with newly truncated value arrays. 
  This function is called within getData()*/
  public getRecentData(objectArray){
    objectArray.map((object) => {
      object.data.splice(7);
      object.data.reverse();
    })
    return objectArray;
    }
 /* Gets seven most recent values of timesArray. 
 This function is called within getData()*/
  public getRecentTimes(array){
    array.splice(7);
    array.reverse();
    return array;
  }
  
   /*Gets formattedData array from service
  stores it in stockArray property 
  then calls getLastSevenData function on incoming array.*/
  getData(stockSymbol){
    this.loader = true;
    
    console.log("ping 1")
    this._apiCall.getData(stockSymbol)
      .subscribe(data => {
        this._stock.stockSymbol = stockSymbol;
        //format stockArray and send stockArray to StockDataService
        this.stockArray = data
        this.getRecentData(this.stockArray);
        this._stock.stockArray = this.stockArray;
        
        //initialize, format, and send timesArray to StockDataService
        this.timesArray = this._apiCall.timestamps;
        this.getRecentTimes(this.timesArray);
        this._stock.timesArray = this.timesArray;
        
        //Notify console that data has been received 
        console.log("Received fully formatted data from Service.")
        //route page to stock-data
        this._router.navigate(['/stock-data']);
        this.loader = false;
        });
        
    
  }
}
