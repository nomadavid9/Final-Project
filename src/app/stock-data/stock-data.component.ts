import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../stock-data.service';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.scss']
})
export class StockDataComponent implements OnInit{
  loader: boolean = false;
  stockArray: any[];
  timesArray: any[];
  stockSymbol: string;

  constructor(private _stock: StockDataService){}
  
  ngOnInit(){
    //subscribe to stockArray BehaviorSubject
    this._stock.stockArray
      .subscribe((updatedStocks) => {
        this.stockArray = updatedStocks;
    });
    //subscribe to timesArray BehaviorSubject
    this._stock.timesArray
      .subscribe((updatedTimes) => {
        this.timesArray = updatedTimes;
    });
    //subscribe to stockSymbol BehaviorSubject
    this._stock.stockSymbol
      .subscribe((updatedSymbol) => {
        this.stockSymbol = updatedSymbol;
    });
  }
}
