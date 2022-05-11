import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanierComponent } from './components/panier/panier.component';
import { EmptyPanierComponent } from './components/panier/empty-panier/empty-panier.component';
import { OrderTotalSummaryComponent } from './components/panier/order-total-summary/order-total-summary.component';
import { PanierListComponent } from './components/panier/panier-list/panier-list.component';
import { PanierItemComponent } from './components/panier/panier-list/panier-item/panier-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './components/payment/payment.component';
import { PsuccessComponent } from './components/payment/psuccess/psuccess.component';
import { PfailedComponent } from './components/payment/pfailed/pfailed.component';
import { LivraisonComponent } from './components/payment/livraison/livraison.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { authInterceptorProviders } from './components/authentication/auth.interceptor';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FootersComponent } from './components/footers/footers.component'
import { HeadersComponent } from './components/headers/headers.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { HomeComponent } from './components/home/home.component';
import { ProduitComponent } from './components/produit/produit.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProduitDetailComponent } from './components/produit/produit-detail/produit-detail.component';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    PanierComponent,
    EmptyPanierComponent,
    OrderTotalSummaryComponent,
    PanierListComponent,
    PanierItemComponent,
    PaymentComponent,
    PsuccessComponent,
    PfailedComponent,
    LivraisonComponent,
    AdminDashboardComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent,
    HeadersComponent,
    FootersComponent,
    SideNavComponent,
    AdminPageComponent,
    HomeComponent,
    ProduitDetailComponent,
    ProduitComponent,
    NavBarComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   // ng module for pagination from ng-bootstrap
    ReactiveFormsModule, // gives support for Reactive Forms
    NgbModule,
    ChartsModule,
    MatButtonModule,
    NgxStarRatingModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
