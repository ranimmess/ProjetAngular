import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-total-summary',
  templateUrl: './order-total-summary.component.html',
  styleUrls: ['./order-total-summary.component.css']
})
export class OrderTotalSummaryComponent implements OnInit {

  @Input() totalcost: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  placeOrder() {
    this.router.navigate(['/checkout', 'address']);
  }


}
