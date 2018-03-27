import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { StockDataService } from '../stock-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
  addedStocks: any[] = [];
  userData: any[] = this._user.userData
  fullName: string = this.userData.firstName  + " " 
                   + this.userData.lastName;
  userStocks: any[] = this.userData.stocks;
  stockSymbol: string;
  
  constructor(private _user: UserService, private _stock: StockDataService) { }
  
  /*Takes ticker symbol from input field and sends it to 
  the addStock() function on userService*/
  addStock(stockSymbol){
    let ticker = {"ticker": stockSymbol}
    this._stock.addStock(ticker)
      .subscribe(
        (userRes: any)=>{
          console.log(userRes, "res!")
          console.log(userRes.ticker)
          this.addedStocks.push(userRes.ticker);
        })
  }

  ngOnInit() {
    console.log(this.fullName)
  }

}
