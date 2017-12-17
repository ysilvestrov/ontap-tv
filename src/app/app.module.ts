import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TaplistService} from './taplist.service';
import {SettingsService} from './settings.service';
import { ShowTaplistComponent } from './show-taplist/show-taplist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ShowTaplistComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TaplistService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
