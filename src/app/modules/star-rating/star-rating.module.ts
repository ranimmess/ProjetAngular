import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarRatingRoutingModule } from './star-rating-routing.module';
import { StarRatingComponent } from './star-rating.component';



@NgModule({
  declarations: [StarRatingComponent],
  imports: [
    CommonModule,
    StarRatingRoutingModule,
    
  ]
})
export class StarRatingModule { }
