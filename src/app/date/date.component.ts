import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-date',
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message: string = "hello in the date.component";
  todaysDate: string = new Date().toDateString();
  
  constructor() { }

  ngOnInit() {
  }

}
