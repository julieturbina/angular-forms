import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; //Import declaration inside the javaScript file

import { AppComponent } from './app.component';
import { MySignupFormComponent } from './my-signup-form/my-signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MySignupFormComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule  //Import FormsModule for angular file
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }