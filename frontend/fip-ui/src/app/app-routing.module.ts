import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlgoInitComponent} from './algo-init/algo-init.component';

const routes: Routes = [
  { path: 'init', component: AlgoInitComponent},
  { path: '**', redirectTo: 'init' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
