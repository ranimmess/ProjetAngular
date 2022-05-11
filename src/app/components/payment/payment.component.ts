import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CheckoutItemDto } from 'src/app/entities/CheckoutItemDto';
import { Panier } from 'src/app/entities/Panier';
import { StripeResponse } from 'src/app/entities/StripeResponse';
import { PanierService } from '../panier/panier.service';
import { loadStripe } from '@stripe/stripe-js';



declare var Stripe: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  stripePubKey = 'pk_test_51Kpi8oHKzLqtZWBLVSDVASf4ekS5rFnFT0ArKefBeMrP1t1PDEvzAp19iomWZvvXi9EtWayS8HVg8grB1vxa4Lec00ydvHs8VF';
  stripePromise = loadStripe(this.stripePubKey);

  private baseURL = "http://localhost:8181/SpringMVC/";
  totalcost!: number;
  cItem: CheckoutItemDto[] = [];
  panierListChangeSubscription: Subscription = new Subscription;
  sessionId: any;
  chargeError:any;
  public cardError!: string;
  private stripejsUrl = 'https://js.stripe.com/v3/';


  constructor(private panierService: PanierService, private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.panierListChangeSubscription = this.panierService.panierListChanged.subscribe(
      (p: Panier) => {
        for (var i=0; i<p.panierItems?.length!; i++){
          this.cItem.push({
            productName: p.panierItems![i].produit?.name,
            quantity:  p.panierItems![i].quantity,
            price:  p.panierItems![i].produit?.price,
            productId: p.panierItems![i].produit?.id,
            userId:1
          })
        }
 
        this.totalcost = p.totalCost!;
      });

      this.panierService.listElementUser().subscribe( p => {
        for (var i=0; i<p.panierItems?.length!; i++){
          this.cItem.push({
            productName: p.panierItems![i].produit?.name,
            quantity:  p.panierItems![i].quantity,
            price:  p.panierItems![i].produit?.price,
            productId: p.panierItems![i].produit?.id,
            userId:1
          })
        }
        this.totalcost = p.totalCost!;
      });

  }


  async pay(){
    const stripe = await this.stripePromise;

    this.http.post<StripeResponse>(this.baseURL + 'create-checkout-session', this.cItem).subscribe(
      (response: any) =>{ stripe?.redirectToCheckout({
        sessionId: response.sessionId
      });
      });
  }

}


