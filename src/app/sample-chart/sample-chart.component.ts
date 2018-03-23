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
      backgroundColor:  'rgba(255, 209, 209, .2)',
      borderColor: 'rgba(255, 99, 132, .6)',
      pointBackgroundColor: 'rgba(255, 99, 132, .6)',
      pointBorderColor: 'rgba(255, 99, 132, .6)',
      pointHoverBackgroundColor: 'rgba(255, 99, 132, .6)',
      pointHoverBorderColor: 'rgba(255, 99, 132, .6)',
      fill: true,
      hidden: true
    },
    { // high
      backgroundColor: 'rgba(210, 233, 255, .2)',
      borderColor: 'rgba(54, 162, 235, .6)',
      pointBackgroundColor: 'rgba(54, 162, 235, .6)',
      pointBorderColor: 'rgba(54, 162, 235, .6)',
      pointHoverBackgroundColor: 'rgba(54, 162, 235, .6)',
      pointHoverBorderColor: 'rgba(54, 162, 235, .6)',
      fill: true,
      hidden: true
    },
    { // low
      backgroundColor: 'rgba(255, 255, 210, .2)',
      borderColor: 'rgba(255, 206, 86, .6)',
      pointBackgroundColor: 'rgba(255, 206, 86, .6)',
      pointBorderColor: 'rgba(255, 206, 86, .6)',
      pointHoverBackgroundColor: 'rgba(255, 206, 86, .6)',
      pointHoverBorderColor: 'rgba(255, 206, 86, .6)',
      fill: true,
      hidden: true
    },
    { // close
      backgroundColor: 'rgba(0, 255, 255, .2)',
      borderColor: 'rgba(75, 192, 192, .6)',
      pointBackgroundColor: 'rgba(75, 192, 192, .6)',
      pointBorderColor: 'rgba(75, 192, 192, .6)',
      pointHoverBackgroundColor: 'rgba(75, 192, 192, .6)',
      pointHoverBorderColor: 'rgba(75, 192, 192, .6))',
      fill: true
    },
    { // volume
      backgroundColor: 'rgba(210, 210, 255, .2)',
      borderColor: 'rgba(153, 102, 255, .6)',
      pointBackgroundColor: 'rgba(153, 102, 255, .6)',
      pointBorderColor: 'rgba(153, 102, 255, .6)',
      pointHoverBackgroundColor: 'rgba(153, 102, 255, .6)f',
      pointHoverBorderColor: 'rgba(153, 102, 255, .6)',
      fill: true,
      hidden: true
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