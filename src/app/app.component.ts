import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'a',
  template: '<form (keydown)="keyDownFunction($event)"> <div>div</div><input type="text" id=id_input autofocus />  </form>',
})
export class AppComponent {
  //AppComponent() {
  constructor() {
    console.log("class");
    console.log(AppComponent);
  }

  ngOnInit() {
    console.log("ngOnInit ");
    console.log(new Date().getTime()); 
  }

  keyDownFunction(event: any) {
    console.log("keyDownFunction");

    axios
      .post('contact')
      //.finally(() => {
      //});
  }
}
