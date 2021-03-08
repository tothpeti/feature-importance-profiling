import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlgoInitComponent } from './algo-init/algo-init.component';
import { AlgoInitListComponent } from './algo-init/algo-init-list/algo-init-list.component';
import { AlgoInitEditComponent } from './algo-init/algo-init-edit/algo-init-edit.component';
import { AlgoInitCardComponent } from './algo-init/algo-init-card/algo-init-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgoInitComponent,
    AlgoInitListComponent,
    AlgoInitEditComponent,
    AlgoInitCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
