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
  
  //submits login request to login function on userService
  loginSubmit(){
    //makes spinner appear
    this.loader = true;
    //calls login function on userService
    this._user.login(this.user)
      .subscribe(
        (userRes: any) => {
          console.log(userRes, "res")
          sessionStorage.setItem('token', userRes.token)
          sessionStorage.setItem('userId', userRes.userId)
          
          //routes to search-component, upon successful login.
          this._router.navigate(['/search'])
          this.loader = false;
        })
  }
  
  registerUser(){
    /*routes to register component (if user 
    chooses to register while in login page)*/
    this._router.navigate(['/register']);
  }
  
  ngOnInit() {
  }

}
