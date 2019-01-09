import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {


  userVariable: any;
  @Input('appComponentname') appComponentname: string;
  @Input('user') user: User;

  // This is like a EAGER LOADING 
  constructor() {
    // this.user = {
    //   name: "Foo Bar",
    //   title: "Software Developer",
    //   address: "1234 Mainst, City, State 500013",
    //   phone: [
    //             '123-456-789',
    //             '987-654-852',
    //             '741-654-852'
    //           ],
    //   phoneNoElements: [
                
    //           ],
    //   userName: this.appComponentname                 
    // };
   }

   // When the component is fully initialized its gonna call ngOnInit() 
   // like a LAZY LOADING
  ngOnInit() {
    // this.user = {
    //   name: this.userObj.name,
    //   title: this.userObj.designation,
    //   address: this.userObj.address,
    //   phone: this.userObj.phone,
    //   phoneNoElements: [
                
    //           ],
    //   userName: this.appComponentname   

    //   // name: "Foo Bar",
    //   // title: "Software Developer",
    //   // address: "1234 Mainst, City, State 500013",
    //   // phone: [
    //   //           '123-456-789',
    //   //           '987-654-852',
    //   //           '741-654-852'
    //   //         ],
    //   // phoneNoElements: [
                
    //   //         ],
    //   // userName: this.appComponentname                 
    // };
  }

}