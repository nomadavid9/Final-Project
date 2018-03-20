import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  
  user: any = {};
  
  constructor(private router: Router) { }
  
  public showUser(){
    console.log(this.user);
  }
  
  registerUser(){
    this.router.navigate([`/register`]);
  }
  ngOnInit() {
  }

}
