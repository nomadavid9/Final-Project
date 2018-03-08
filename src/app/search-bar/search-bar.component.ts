import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private _apiCall: ApiCallService) {}

  ngOnInit() {
    this.httpCall();
  }

  httpCall(){
    this._apiCall.getData()
      .subscribe(data => {
        console.log(data)
      });
  }
}
