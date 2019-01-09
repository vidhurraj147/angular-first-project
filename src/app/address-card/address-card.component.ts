import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {


  user: any;
  @Input('appComponentname') appComponentname: string;

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

  ngOnInit() {
    this.user = {
      name: "Foo Bar",
      title: "Software Developer",
      address: "1234 Mainst, City, State 500013",
      phone: [
                '123-456-789',
                '987-654-852',
                '741-654-852'
              ],
      phoneNoElements: [
                
              ],
      userName: this.appComponentname                 
    };
  }

}
