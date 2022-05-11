import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanierItemDto } from 'src/app/entities/PanierItemDto';
import { PanierService } from '../../panier.service';

@Component({
  selector: 'app-panier-item',
  templateUrl: './panier-item.component.html',
  styleUrls: ['./panier-item.component.css']
})
export class PanierItemComponent implements OnInit {

  id!: number;
  image!: string;
  name!: string;
  quantity!: number;
  prix!: number;
  description!: string;

  @Input() panierItem!: PanierItemDto;
  
  constructor(private panierService: PanierService, private router: Router) { }
  
  ngOnInit(): void {

    this.id = this.panierItem.produit?.id!
    this.image = this.panierItem.produit?.imageURL!;
    this.name = this.panierItem.produit?.name!;
    this.quantity = this.panierItem.quantity!;
    this.prix = this.panierItem.produit?.price!;
    this.description = this.panierItem.produit?.description!;

  }

  remove() {
    this.panierService.delete(this.id).subscribe(
      () => this.router.navigate(['panier'])
    )
    }
  minusOne() {
    this.panierService.updateQteMinus(this.id).subscribe(
      () => this.router.navigate(['panier'])
    )
  }

  addOne() {
    this.panierService.updateQtePlus(this.id).subscribe(
      () => this.router.navigate(['panier'])
    )
  }

    // Change this method once angular releases RC4
  // Follow this linke to know more about this issue https://github.com/angular/angular/issues/12869
  //removeLineItem() {
    // this.store.dispatch(this.actions.removeLineItem(this.lineItem.id));
   // this.checkoutService.deleteLineItem(this.lineItem)
      //.subscribe();
  //}

}
