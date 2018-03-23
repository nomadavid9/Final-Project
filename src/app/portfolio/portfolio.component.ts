import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
  portStocks: any[] = [];
  stockSymbol: string;
  constructor(private _user: UserService) { }
  
  /*Takes ticker symbol from input field and sends it to 
  the addStock() function on userService*/
  addStock(stockSymbol){
    let ticker = {"ticker": stockSymbol}
    this._user.addStock(ticker)
      .subscribe(
        (userRes: any)=>{
          console.log(userRes, "res!")
          console.log(userRes.ticker)
          this.portStocks.push(userRes.ticker);
        })
  }

  ngOnInit() {
  }

}
