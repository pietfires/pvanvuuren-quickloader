import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaceholderIfDirective } from './placeholder-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderIfDirective
  ],
  imports: [
    BrowserModule
  ],
  exports: [PlaceholderIfDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class PlaceholderIfModule { }
