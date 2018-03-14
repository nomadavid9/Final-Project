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
  
  stockObj: any;
  timestamps: any = this._apiCall.timestamps;
  loader: boolean = false;
  
  showSymbol(symbol){
    console.log(symbol);
  }

  httpCall(){
    this.loader = true;
    this._apiCall.getData()
      .subscribe(data => {
        console.log("Received formatted data from Service.")
        this.stockObj = data
        this.loader = false;
        }
      );
  }
}
