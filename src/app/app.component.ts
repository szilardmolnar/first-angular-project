import { Component } from '@angular/core';

@Component({
  template: '<form (keydown)="keyDownFunction($event)"> </form>',
})
export class AppComponent {
  keyDownFunction(event: any) {}
}
