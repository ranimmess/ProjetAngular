import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Sujet } from '../sujet';
import { SujetService } from '../sujet.service';

@Component({
  selector: 'app-update-sujet',
  templateUrl: './update-sujet.component.html',
  styleUrls: ['./update-sujet.component.css']
})
export class UpdateSujetComponent implements OnInit {

  sujetId: number;
  sujet: any={libelleSujet:""};
  constructor(private sujetService: SujetService,
    private route: ActivatedRoute,private router: Router) { }

  
  ngOnInit(): void {
    console.log(this.route.snapshot.params['sujetId']);
    
    // this.sujetId = this.route.snapshot.params['sujetId'];
    
    this.route.params.subscribe((params: Params) =>{
      console.log(params);
      
      
      this.sujetId = params['idSujet']
      
      console.log(this.sujetId);
    }) 

    console.log(this.sujetId);
    

    this.sujetService.getSujetById(this.sujetId).subscribe((data) => {
      console.log(data);
      this.sujet = data;
    }, error => console.log(error));

    
  }

  onSubmit(){
    this.sujetService.updateSujet(this.sujetId, this.sujet).subscribe( data => {

      this.goToSujetList();
    }
    )
;  }

  goToSujetList(){
    this.router.navigate(['/sujets']);
  }

}
