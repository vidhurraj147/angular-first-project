import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  constructor(private svc: TestService) { 
    this.svc.printToColsole("This is from an inner View Module ViewComponentComponent constructor");
  }

  ngOnInit() {
  }

}
