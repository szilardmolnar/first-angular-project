import { Component } from '@angular/core';

@Component({
  selector: 'a',
  template: '<form (keydown)="keyDownFunction($event)"> <div>div</div>  </form>',
})
export class AppComponent {
  AppComponent() {
    console.log(AppComponent);
  }

  keyDownFunction(event: any) {
    console.log("keyDownFunction");
  }
}
