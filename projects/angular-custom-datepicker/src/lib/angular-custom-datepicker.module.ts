import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularCustomDatepickerComponent } from './angular-custom-datepicker.component';



@NgModule({
  declarations: [
    AngularCustomDatepickerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  exports: [
    AngularCustomDatepickerComponent
  ],
  providers: [ { provide: Window, useValue: window }]
})
export class AngularCustomDatepickerModule { }
