import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Rayon } from 'src/app/core/model/rayon';
import { RayonService } from 'src/app/core/services/rayon.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-form-add-rayon',
  templateUrl: './form-add-rayon.component.html',
  styleUrls: ['./form-add-rayon.component.css']
})
export class FormAddRayonComponent implements OnInit {
  rayon: Rayon;
  status:boolean;
  constructor(private ServiceRayon : RayonService,private router: Router) { }

  ngOnInit(): void {
    this.status=this.ServiceRayon.status;
    if (this.ServiceRayon.status){
      this.rayon =  this.ServiceRayon.CurrentRayon;
    }else {
      this.rayon =  new Rayon();
    }
  }
  save(){
   /* if (this.status){
      this.ServiceStock.updateStockService(this.stock,this.stock.id).subscribe(
        ()=>this.router.navigate(['/show-all-stock'])
      )
    }
    else {
      
      this.ServiceStock.addStockService(this.stock).subscribe(
        ()=>this.router.navigate(['/show-all-stock'])
      )
    }*/
    this.ServiceRayon.addRayonService(this.rayon).subscribe(
      ()=>this.router.navigate(['/show-all-rayon']))
  }
  return(){
    this.router.navigate(['/show-all-rayon']);
  }

}

