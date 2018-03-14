import { Component, OnInit, Input } from '@angular/core';
import { ApiCallService } from '../api-call.service'

@Component({
  selector: 'app-sample-chart',
  templateUrl: './sample-chart.component.html'
})
export class SampleChartComponent {

constructor (private _apiCall: ApiCallService){}

@Input()stockArray: any[];
@Input()timestamps: any[];

  mockData: any = 
    {
    "2018-03-08 16:00:00": 
        {
        "1. open": "94.1600",
        "2. high": "94.4850",
        "3. low": "93.7650",
        "4. close": "94.4300",
        "5. volume": "7040720"
        }
    }
  // lineChart
  public lineChartData:Array<any> = 
  this.stockArray;
  
  public lineChartLabels:Array<any> = 
  ['-7Hr', '-6HR', '-5Hr', '-4Hr', '-3Hr', '-2Hr', '-1Hr'];
  
  public graphLabels:Array<any> = 
  ['label','-7Hr', '-6HR', '-5Hr', '-4Hr', '-3Hr', '-2Hr', '-1Hr'];
  
  
  
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    console.log(this.stockArray)
    console.log(this.timestamps)
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}