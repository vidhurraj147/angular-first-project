import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  printToColsole(arg){
    console.log("Given argument is "+arg);
  }
  constructor() { }
}
