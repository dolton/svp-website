import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModModule } from './material-mod/material-mod.module';
import { WebsiteModModule } from './website-mod/website-mod.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModModule,
    WebsiteModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
