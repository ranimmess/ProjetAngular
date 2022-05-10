import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'star-rating', loadChildren: () => import('./modules/star-rating/star-rating.module').then(m => m.StarRatingModule) },

 
  { path: 'font-awesome', loadChildren: () => import('./modules/font-awesome/font-awesome.module').then(m => m.FontAwesomeModule) },
  
  { path: 'dynamic', loadChildren: () => import('./modules/dynamic/dynamic.module').then(m => m.DynamicModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
