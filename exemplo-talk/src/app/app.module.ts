import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfModule } from '@totvs/thf-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
