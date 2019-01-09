import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user = {
    name: "Foo Bar",
    title: "Software Developer",
    address: "1234 Mainst, City, State 500013",
    phone: [
              123-456-789,
              987-654-852
            ]
  };

  constructor() { }

  ngOnInit() {
  }

}
