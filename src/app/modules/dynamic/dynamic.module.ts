import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic.component';

import { AdDirective } from './directives/ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { JobAdComponent } from './job-ad/job-ad.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [DynamicComponent, AdDirective, AdBannerComponent, JobAdComponent, ProfileComponent],
  imports: [
    CommonModule,
    DynamicRoutingModule,
 
  ]
})
export class DynamicModule { }
