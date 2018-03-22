import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  user: any = {};
  loader: boolean = false;
  
  constructor(private _user: UserService, private _router: Router) { }
  
  registerSubmit(){
    this.loader = true;
    this._user.registerUser(this.user)
      .subscribe(
        (userRes: any) => {
          console.log(userRes, "res")
          sessionStorage.setItem('token', userRes.token)
          sessionStorage.setItem('userId', userRes.userId)
          this._router.navigate(['/search'])
          this.loader = false;
        })
  }
  
  ngOnInit() {
  }

}
