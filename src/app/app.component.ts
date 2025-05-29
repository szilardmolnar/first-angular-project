import { Component, OnInit, NgModule } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { RouterOutlet } from '@angular/router';
/** import { InneritemComponent } from './app/inneritem'; */
/** import { Inneritem } from './inneritem'; */
import { InneritemComponent } from './inneritem/inneritem.component';
import axios from 'axios'; 

/** const concurrently = require('concurrently'); */
//import * as concurrently from "concurrently";
//import concurrently = require( "concurrently" );
import {concurrently} from "concurrently";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root2',
  template: `<form (ngSubmit)="onSubmit()"><input type="text" /><button type="submit"></button></form>`,
  imports: [
    RouterOutlet,
    InneritemComponent,
  ],
  //templateUrl: './app.component.html', 
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
export class AppComponent implements OnInit {
  title = 'first-angular-project';

  CForm!: FormGroup;

  ngOnInit() {
    console.log(" ngOnInit "+(new Date()).getTime());
    //const { result } = concurrently( ['console.log("c1")'], );
    
  }

  onSubmit() {
    console.log(" onSubmit ");
  } 
}

//export default concurrently;
