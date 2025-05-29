import { Component } from '@angular/core';

@Component({
  selector: 'app-root2',
  template: `<form #createForm="ngForm" (ngSubmit)="Update()"><button type=submit [disabled]="!createForm.form.valid">Change</button></form>`,
})
export class AppComponent  {
  Update()
  {
    console.log(" Update ");
  }
}
