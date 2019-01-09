import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  userNameSearch: string = "";
  response: any;
  constructor(private svc: TestService, private http: HttpClient) { 
    this.svc.printToColsole("This is from an inner View Module ViewComponentComponent constructor");
  }

  ngOnInit() {
  }

  search(){
    this.http.get('https://api.github.com/users/'+this.userNameSearch)
    .subscribe((response) => {
      this.response = response;
      console.log("response in search() received ");
      console.log(this.response);
    });
  }

}
