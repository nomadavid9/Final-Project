import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  user: any = {};
  
  constructor(private _user: UserService) { }
  
  registerSubmit(){
    console.log(this.user)
    
    this._user.registerUser(this.user)
      .subscribe(
        userRes => {
          console.log(userRes, "res")
        })
  }
  
  ngOnInit() {
  }

}
