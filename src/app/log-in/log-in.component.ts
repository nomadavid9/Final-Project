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
  loader: boolean = false;
  
  constructor(private _user: UserService, private _router: Router) { }
  
  loginSubmit(){
    this.loader = true;
    this._user.login(this.user)
      .subscribe(
        (userRes: any) => {
          console.log(userRes, "res")
          sessionStorage.setItem('token', userRes.token)
          sessionStorage.setItem('userId', userRes.userId)
          this._router.navigate(['/search'])
          this.loader = false;
        })
  }
  
  registerUser(){
    this.loader = true;
    this._router.navigate(['/register']);
    this.loader = false;
  }
  ngOnInit() {
  }

}
