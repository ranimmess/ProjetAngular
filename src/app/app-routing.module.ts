import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './components/panier/panier.component';
import { LivraisonComponent } from './components/payment/livraison/livraison.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PfailedComponent } from './components/payment/pfailed/pfailed.component';
import { PsuccessComponent } from './components/payment/psuccess/psuccess.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { ProduitDetailComponent } from './components/produit/produit-detail/produit-detail.component';

const routes: Routes = [
  { path: 'panier', component: PanierComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment/success', component: PsuccessComponent },
  { path: 'payment/failed', component: PfailedComponent },
  { path: 'livraison', component: LivraisonComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'produit/:id', component: ProduitDetailComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
