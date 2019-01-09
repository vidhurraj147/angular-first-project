import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-first-project app.component.ts';
  user: User;
  inputText: string = "Initial Value";
  
  constructor(){
    this.user = new User();
    this.user.name = "Foo Bar";
    this.user.designation = "Software Developer";
    this.user.address = "1234 Mainst, City, State 500013";
    this.user.phone = [
                '123-456-7sd89',
                '987-654-85sd2',
                '741-654-85sd2'
              ]
  }
}
