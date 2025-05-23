import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/** import { InneritemComponent } from './app/inneritem'; */
/** import { Inneritem } from './inneritem'; */
import { InneritemComponent } from './inneritem/inneritem.component';

@Component({
  selector: 'app-root2',
  template: `<input type="text" />`,
  imports: [
    RouterOutlet,
    InneritemComponent,
  ],
   templateUrl: './app.component.html', 
  styleUrl: './app.component.css',
})
/**
@Component({
  template: `<input type="text" />`,
  selector: 'app-root',
  imports: [RouterOutlet],
  styleUrl: './app.component.css',
})
*/
export class AppComponent {
  title = 'first-angular-project';
}
