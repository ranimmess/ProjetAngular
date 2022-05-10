import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Commantaire } from '../commantaire';
import { CommentService } from '../comment.service';
import { Sujet } from '../sujet';
import { SujetService } from '../sujet.service';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit {
  searchText:any;
  sujets: Sujet[];
  comments: any[];
  sujetId: number;
  sujet: any={libelleSujet:""};
  

  constructor(private sujetService: SujetService,
    private commentService: CommentService,
    private route: ActivatedRoute,private router: Router) { 
      this.sujetId = this.route.snapshot.params['sujetId'];
    }

  ngOnInit(): void {
    this.getSujets();
    
  }

  insc: Array<Commantaire> = [];
  getListCommentaire(){
        
    this.sujetService.getCommentsById(this.sujetId).subscribe((data:any) => {
      data.forEach((element:any) => {
        this.insc.push(element)
        console.log(element);
        console.log(this.sujetId);
      });
      console.log(data);
      this.comments = data;
    }, error => console.log(error));
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
