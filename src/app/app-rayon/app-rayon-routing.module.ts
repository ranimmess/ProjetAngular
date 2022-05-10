import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MainRayonComponent } from './main-rayon/main-rayon.component';

import { FormAddRayonComponent } from './form-add-rayon/form-add-rayon.component';

  const routes: Routes = [
    {path:'show-all-rayon', component: MainRayonComponent},
  
    {path:'add-rayon', component:FormAddRayonComponent},


    
  
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  

  export class AppRayonRoutingModule { }
  