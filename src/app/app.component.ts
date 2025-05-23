import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root2',
  template: `<input type="text" />`,
  imports: [RouterOutlet],
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
