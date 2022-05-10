import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppStarComponent } from './app-star.component';

const routes: Routes = [{ path: '', component: AppStarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppStarRoutingModule { }