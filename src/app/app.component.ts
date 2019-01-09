import { Component, OnInit } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-first-project app.component.ts';
  user: User;
  inputText: string = "Initial Value";
  
  // I need TestService to access
  // We provide it as constructor arguments
  // constructor(svc: TestService){
  //   svc.printToColsole("TestService is passed as constructor parameter");
  // }

  constructor(private svc: TestService, private http: HttpClient){
    this.svc.printToColsole("TestService is passed as constructor parameter");
    this.user = new User();
    this.user.name = "Foo Bar";
    this.user.designation = "Software Developer";
    this.user.address = "1234 Mainst, City, State 500013";
    this.user.phone = [
                '123-456-7sd89',
                '987-654-85sd2',
                '741-654-85sd2'
              ]

    // lets say we made a API call from this testService then this approach is not an ideal
    // services are dependent on other services then this approach is not an ideal
    // We created a service ans importing it here          
    // let scv = new TestService();
    // scv.printToColsole("ARGUMENT_IS_PROVIDED");
  }

  ngOnInit(){
    let observable = this.http.get('https://api.github.com/users/koushikkothagal');
    observable.subscribe((response) => console.log(response));
  }


}
