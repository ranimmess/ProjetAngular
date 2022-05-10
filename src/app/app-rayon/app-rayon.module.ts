
import {HttpClientModule} from "@angular/common/http";
import { AppRayonRoutingModule } from "./app-rayon-routing.module";


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { MainRayonComponent } from "./main-rayon/main-rayon.component";
import { FormAddRayonComponent} from './form-add-rayon/form-add-rayon.component'

@NgModule({
    declarations: [
     
      MainRayonComponent,
      FormAddRayonComponent,
    
    ],
    imports: [
      CommonModule,
      BrowserModule,
      AppRayonRoutingModule,
      FormsModule,
      ReactiveFormsModule,
        HttpClientModule
      ]
    })
    export class AppRayonModule { }
    
        