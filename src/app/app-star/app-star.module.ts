import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStarRoutingModule } from './app-star-routing.module';
import { AppStarComponent } from './app-star.component';



@NgModule({
  declarations: [AppStarComponent],
  imports: [
    CommonModule,
    AppStarRoutingModule,
    
  ]
})
export class AppStarModule { }
