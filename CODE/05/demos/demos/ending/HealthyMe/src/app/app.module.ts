import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewWeightEntryComponent } from './new-weight-entry/new-weight-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewWeightEntryComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
