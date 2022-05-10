import { Component, OnInit } from '@angular/core';
import { Rayon } from 'src/app/core/model/rayon';
import { RayonService } from 'src/app/core/services/rayon.service';
import {Router} from "@angular/router";
import swal from 'sweetalert';
@Component({
  selector: 'app-main-rayon',
  templateUrl: './main-rayon.component.html',
  styleUrls: ['./main-rayon.component.css']
})
export class MainRayonComponent implements OnInit {
  inputRayon: Rayon;
  ListRayon: Rayon[];
  showFormTemplate: boolean;
  msg: string;
  searchText:any;
  constructor(private serviceRayon: RayonService,private router: Router) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.serviceRayon.getListRayonService().subscribe(
      (data: Rayon[]) => this.ListRayon= data
    )
  }
  delete(rayon: Rayon): void{
    swal({
  
      title:"Are you sure?",
      text:"Once deleted, you will not be able to recover this rayon!",
          icon: "warning",
          buttons: ["Cancel","Confirm"],
          dangerMode: true,
    
      })
      .then((willDelete)=>{
    
            if (willDelete) {
    let i = this.ListRayon.indexOf(rayon);
    this.serviceRayon.deleteRayonService(rayon.idRayon).subscribe(
      ( )=>this.ListRayon.splice(i,1)
    );
    swal("Rayon has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Rayon  is safe!");
  }
});
  }
  update(rayon: Rayon){
    this.serviceRayon.UpdateRayon(rayon);
    this.router.navigate(['/add-rayon']);
  }
  AddRayon(){
    this.router.navigate(['/add-rayon'])
  }
 


  save(rayon: Rayon){
    let i = this.ListRayon.indexOf(rayon);
    if(i!=-1){
      //update Stock
      this.serviceRayon.updateRayonService(rayon,rayon.idRayon).subscribe(
      () => {this.ListRayon[i]=rayon
        this.showFormTemplate =false}
      )
    }
    else {
      //add Stock
  
      this.showFormTemplate =false
  
    this.serviceRayon.addRayonService(rayon).subscribe(
      () => this.ListRayon.push(rayon),
      () => this.msg='Test'
    )
    }
  }
  showForm(){
    if(this.showFormTemplate === false){
      this.showFormTemplate = true
      this.inputRayon = new Rayon();
    }
    else {
  
      this.showFormTemplate = false
    }
  }
}
