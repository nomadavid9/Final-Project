import { Component, Input} from '@angular/core';
import { StockDataService } from '../stock-data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(private _stock: StockDataService) { }
  
  @Input('stockArray') lineChartData: any[];
  @Input('timesArray') lineChartLabels: any[];
  date: string = this._stock.date;
}
