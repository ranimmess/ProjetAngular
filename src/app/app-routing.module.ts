import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductRoutingModule} from "./app-product/app-product-routing.module";
import { NotFoundComponent} from "./app-shared/not-found/not-found.component";
import { MainProviderComponent } from './app-provider/main-provider/main-provider.component';
import {UserRoutingModule} from "./user/user-routing.module";
import {LivreurRoutingModule} from "./app-livreur/livreur-routing.module";
import {LandingPageRoutingModule} from "./landing-page/landing-page-routing.module";

import { MainLivreurComponent } from './app-livreur/main-livreur/main-livreur.component';
import { FormLivreurComponent } from './app-livreur/form-livreur/form-livreur.component';




import { AppProviderRoutingModule } from './app-provider/app-provider-routing.module';
import { AppStockRoutingModule } from './app-stock/app-stock-routing.module';
import { MainStockComponent } from './app-stock/main-stock/main-stock.component';
import { AppLivraisonRoutingModule } from './app-livraison/app-livraison-routing.module';
import { CartRoutingModule } from './app-cart/app-cart-routing.module';
import { FactureRoutingModule } from './app-facture/app-facture-routing.module';

import { AppRayonModule } from './app-rayon/app-rayon.module';
import { MainRayonComponent } from './app-rayon/main-rayon/main-rayon.component';
import { AppRayonRoutingModule } from './app-rayon/app-rayon-routing.module';
import { AppStarModule } from './app-star/app-star.module';

const routes: Routes = [
  {path: '',redirectTo:'main-dashboard', pathMatch: 'full' },
  {path: 'provider',component: MainProviderComponent },
  {path: 'stock',component: MainStockComponent },

  {path: '**',component: NotFoundComponent },
  { path: 'star-rating', loadChildren: () => import('./app-star/app-star.module').then(m => m.AppStarModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppProductRoutingModule,
    AppProviderRoutingModule,
    AppStockRoutingModule,
    UserRoutingModule,
    AppRayonRoutingModule,
    LivreurRoutingModule,
    AppRayonModule,
    LandingPageRoutingModule,
    AppLivraisonRoutingModule,
    CartRoutingModule,
    FactureRoutingModule,
    AppStarModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
