import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sujet } from '../sujet';
import { SujetService } from '../sujet.service';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit {

  sujets: Sujet[];

  constructor(private sujetService: SujetService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSujets();
  }
  
  private getSujets() {
    this.sujetService.getSujetsList().subscribe(data => {
      this.sujets = data;
    });
  }
  
  updateSujet(sujetId: number) {
    this.router.navigate(['update-sujet', sujetId]);
    
  }

  viewPost(sujetId: number){
    this.router.navigate(['viewPost', sujetId]);
  }

  
  
  
  delete(sujetId: number) {
    this.sujetService.deleteSujetById(sujetId).subscribe(data => {
      this.getSujets();
    }
    );
  }

}
