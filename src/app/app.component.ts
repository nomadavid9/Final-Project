import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isLoggedIn: boolean = false;
    
    constructor(private _user: UserService, private _router: Router) {
    }
    
    logOut(){
        this._router.navigate['/login'];
        this._user.logOut();
    }
    
    ngOnInit(){
        this._user.isLoggedIn
            .subscribe(logStatus => this.isLoggedIn = logStatus)
    }
}
