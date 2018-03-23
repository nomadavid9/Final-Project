import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor() { }
  
  @Input('stockArray') lineChartData: any[];
  @Input('timesArray') lineChartLabels: any[];

}
