import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Commantaire } from 'src/app/commantaire';
import { CommentService } from 'src/app/comment.service';
import { SujetService } from 'src/app/sujet.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  commentForm: FormGroup;
  sujetId: number;
  commentId: number;
  comment: Commantaire;
  commentaire: string;
  comments: any[];
  sujet: any={libelleSujet:""};
  constructor(private sujetService: SujetService,
    private commentService: CommentService,
    private route: ActivatedRoute,private router: Router) {
      this.sujetId = this.route.snapshot.params['sujetId'];

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    
     }

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

    this.getListCommentaire();
    
   
  }

  insc: Array<Commantaire> = [];
  getListCommentaire(){
        
    this.sujetService.getCommentsById(this.sujetId).subscribe((data:any) => {
      data.forEach((element:any) => {
        this.insc.push(element)
      });
      console.log(data);
      this.comments = data;
    }, error => console.log(error));
  }

  addCommentaire(){
    console.log("add comment");
    
    this.sujetService.createCommentaire(this.commentaire,this.sujet).subscribe( data =>{
      console.log(data);
      // this.goToSujetList();

      this.getListCommentaire();
    },
    error => console.log(error));
  
  }

  deleteComment(commentId: number){
    console.log("delete comment");
    console.log(commentId);

    this.commentService.deleteCommentById(commentId).subscribe(data => {
      this.getListCommentaire();
    }
    );
  }




}
