import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../stock-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.scss']
})
export class StockDataComponent implements OnInit {

  constructor(private _stock: StockDataService) { }
  
  stockArray: any[] = this._stock.stockArray;
  timesArray: any[] = this._stock.timesArray;
  stockSymbol: string = this._stock.stockSymbol;
  ngOnInit() {
  }

}
