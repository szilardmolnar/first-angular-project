import { Component } from '@angular/core';

@Component({
  selector: 'a',
  template: '<form (keydown)="keyDownFunction($event)"> <div>div</div><input type="text" id=id_input autofocus />  </form>',
})
export class AppComponent {
  AppComponent() {
    console.log(AppComponent);
  }

  keyDownFunction(event: any) {
    console.log("keyDownFunction");
  }
}
