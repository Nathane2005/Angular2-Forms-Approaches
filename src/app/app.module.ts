import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SignupTemplateComponent} from './signup-template/signup-template.component';
import {SignupReactiveComponent} from './signup-reactive/signup-reactive.component';
import { SignupReactivecomplexComponent } from './signup-reactivecomplex/signup-reactivecomplex.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupTemplateComponent,
    SignupReactiveComponent,
    SignupReactivecomplexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [SignupReactivecomplexComponent]
})
export class AppModule {
}
