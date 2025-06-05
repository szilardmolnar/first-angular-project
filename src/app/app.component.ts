import { Component } from '@angular/core';

@Component({
  selector: '',
  template: '<form (keydown)="keyDownFunction($event)"> </form>',
})
export class AppComponent {
  keyDownFunction(event: any) {}
}
