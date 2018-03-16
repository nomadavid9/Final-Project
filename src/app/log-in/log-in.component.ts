import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) { }
  
  registerUser(){
    this.router.navigate([`/register`]);
  }
  ngOnInit() {
  }

}
