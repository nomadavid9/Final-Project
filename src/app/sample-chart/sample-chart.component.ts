import { Component, OnInit, Input } from '@angular/core';
import { ApiCallService } from '../api-call.service'

@Component({
  selector: 'app-sample-chart',
  templateUrl: './sample-chart.component.html'
})
export class SampleChartComponent {

constructor (private _apiCall: ApiCallService){}

@Input('stockArray') lineChartData: any[];
@Input('timesArray') lineChartLabels: any[];
  
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // open
      backgroundColor:  '#FFD1D1',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // high
      backgroundColor: '#D2E9FF',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // low
      backgroundColor: '#FFFFD2',
      borderColor: 'rgb(255, 206, 86)',
      pointBackgroundColor: 'rgb(255, 206, 86)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // close
      backgroundColor: '#D2FFFF',
      borderColor: 'rgb(75, 192, 192)',
      pointBackgroundColor: 'rgb(75, 192, 192)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // volume
      backgroundColor: '#D2D2FF',
      borderColor: 'rgb(153, 102, 255)',
      pointBackgroundColor: 'rgb(153, 102, 255)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public viewData():void {
    console.log("chart component has access to stockArray: ", this.lineChartData)
    console.log("chart component has access to timestamps: ", this.lineChartLabels)
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}