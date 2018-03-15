import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  constructor(private _apiCall: ApiCallService) {}
  stockSymbol: string;
  stockArray: any;
  timesArray: any;
  loader: boolean = false;

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
    this._apiCall.getData(stockSymbol)
      .subscribe(data => {
        //format stockArray
        this.stockArray = data
        this.getRecentData(this.stockArray);
        
        //initialize and format timesArray
        this.timesArray = this._apiCall.timestamps;
        this.getRecentTimes(this.timesArray);
        
        //Notify console that data has been received 
        console.log("Received fully formatted data from Service.")
        this.loader = false;
        });
    
  }
}
