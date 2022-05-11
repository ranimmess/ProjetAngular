import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LivraisonDTO } from 'src/app/entities/LivraisonDTO';
import { LivraisonService } from './livraison.service';



@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  id!:number;
  editMode = false;
  livraison!: LivraisonDTO;

 
  livrChangeSubscription: Subscription = new Subscription;
  lvr!: LivraisonDTO;

  constructor(public router: Router, private livrService:LivraisonService ) { }

  ngOnInit(): void {

    this.livrChangeSubscription = this.livrService.livrChanged.subscribe(
      (l:LivraisonDTO) => {
        if(typeof(l) !== undefined) {
          this.lvr.city = l.city!;
          this.lvr.country = l.country!;
          this.lvr.numTel = l.numTel!;
          this.lvr.num_liv = l.num_liv!;
          this.lvr.street = l.street!;
          this.lvr.user_id = 1;
          this.lvr.zipCode = l.zipCode!;
         }
        else{
          this.lvr.city = "";
          this.lvr.country = "";
          this.lvr.numTel = 0;
          this.lvr.num_liv = 0;
          this.lvr.street = "";
          this.lvr.user_id = 1;
          this.lvr.zipCode = 0;
        }})

      
 
      this.livrService.index().subscribe(p =>{
        (l:LivraisonDTO)=> {
          if(typeof(l) !== undefined) {
            this.lvr.city = l.city!;
            this.lvr.country = l.country!;
            this.lvr.numTel = l.numTel!;
            this.lvr.num_liv = l.num_liv!;
            this.lvr.street = l.street!;
            this.lvr.user_id = 1;
            this.lvr.zipCode = l.zipCode!;
           }
          else{
          this.lvr.city = "";
          this.lvr.country = "";
          this.lvr.numTel = 0;
          this.lvr.num_liv = 0;
          this.lvr.street = "";
          this.lvr.user_id = 1;
          this.lvr.zipCode = 0;
          }}})
      
      this.editMode = this.livraison != null;
  }

  onCancel(){
    this.router.navigate(["panier"]);
   }


 
   onSubmit(formulaire: NgForm){
  
    if (this.editMode) {
      this.livrService.update(this.lvr).subscribe(
        b => this.router.navigate(['livraison'])
      );
    } else {
      
    this.livrService.store(this.lvr).subscribe(
        b => {this.lvr = {}; formulaire.reset()}
      );
   }
  }

}
