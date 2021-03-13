import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';

import { AlgoInitComponent } from './algo-init/algo-init.component';
import { AlgoInitListComponent } from './algo-init/algo-init-list/algo-init-list.component';
import { AlgoInitEditComponent } from './algo-init/algo-init-edit/algo-init-edit.component';
import { AlgoInitCardComponent } from './algo-init/algo-init-card/algo-init-card.component';
import { AlgoInitFormComponent } from './algo-init/algo-init-form/algo-init-form.component';
import { TreeFormComponent } from './algo-init/algo-init-form/tree-form/tree-form.component';
import { MutualInfoFormComponent } from './algo-init/algo-init-form/mutual-info-form/mutual-info-form.component';
import { LinearSvcFormComponent } from './algo-init/algo-init-form/linear-svc-form/linear-svc-form.component';
import { XgboostFormComponent } from './algo-init/algo-init-form/xgboost-form/xgboost-form.component';
import { RankingFormComponent } from './algo-init/ranking-form/ranking-form.component';
import { LinearSvcCardComponent } from './algo-init/algo-init-card/linear-svc-card/linear-svc-card.component';
import { TreeCardComponent } from './algo-init/algo-init-card/tree-card/tree-card.component';
import { MutualInfoCardComponent } from './algo-init/algo-init-card/mutual-info-card/mutual-info-card.component';
import { XgboostCardComponent } from './algo-init/algo-init-card/xgboost-card/xgboost-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgoInitComponent,
    AlgoInitListComponent,
    AlgoInitEditComponent,
    AlgoInitCardComponent,
    AlgoInitFormComponent,
    TreeFormComponent,
    MutualInfoFormComponent,
    LinearSvcFormComponent,
    XgboostFormComponent,
    RankingFormComponent,
    LinearSvcCardComponent,
    TreeCardComponent,
    MutualInfoCardComponent,
    XgboostCardComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
