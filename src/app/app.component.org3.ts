import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root2',
  template: `<form #createForm="ngForm" (ngSubmit)="Update()"><button type=submit [disabled]="!createForm.form.valid">Change</button></form>`,
})
@NgModule({
  imports: [
             BrowserModule,
             FormsModule
           ],
})
export class AppComponent  {
  Update()
  {
    console.log(" Update ");
  }
}
