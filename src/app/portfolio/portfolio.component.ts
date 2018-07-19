import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { StockDataService } from '../stock-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
  userData: any; 
  userStocks: any[] = [];
  firstName: any;
  lastName: any;
  fullName: any;
  isDisabled: boolean = false;
  stockSymbol: string;
  
  constructor(private _user: UserService, 
              private _stock: StockDataService) { }
  
  /*Takes ticker symbol from input field and sends it to 
  the addStock() function on userService*/
  addStock(stockSymbol){
    let ticker = {"ticker": stockSymbol}
    this._stock.getData(stockSymbol)
    this._stock.addStock(ticker)
      .subscribe(
        (userRes: any)=>{
          console.log(userRes, "res!")
          console.log(userRes.ticker)
          this.userStocks.push(userRes.ticker);
        })
  }
  
  buttonDisable(stockSymbol){
    this.isDisabled = this.userStocks.includes(stockSymbol) ?
      true : false;
  }
  
  getData(stockSymbol){
    this._stock.getData(stockSymbol)
  }
  
  ngOnInit(){
    this.userData = this._user.userData;
    this.firstName = this.userData.firstName
    this.lastName = this.userData.lastName
    this.fullName = this.firstName + " " + this.lastName;
    for(let stock of this.userData.stocks){
      this.userStocks.push(stock.ticker)
    }
  }
}
