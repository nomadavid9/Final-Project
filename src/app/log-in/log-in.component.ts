import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  
  user: any = {};
  
  constructor(private _user: UserService, private router: Router) { }
  
  loginSubmit(){
    console.log(this.user);
    this._user.login(this.user)
      .subscribe(
        userRes => {console.log(userRes, "res")
      })
  }
  
  registerUser(){
    this.router.navigate(['/register']);
  }
  ngOnInit() {
  }

}
