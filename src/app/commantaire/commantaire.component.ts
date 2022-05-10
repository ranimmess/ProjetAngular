import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commantaire } from '../commantaire';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-commantaire',
  templateUrl: './commantaire.component.html',
  styleUrls: ['./commantaire.component.css']
})
export class CommantaireComponent implements OnInit {

  comments: Commantaire[];

  constructor(private commentService: CommentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getComments();
  }

  private getComments() {
    this.commentService.getCommentsList().subscribe(data => {
      this.comments = data;
    });
  }
  
  updateComment(sujetId: number) {
    this.router.navigate(['update-sujet', sujetId]);
  }

  
  
  
  delete(commentId: number) {
    this.commentService.deleteCommentById(commentId).subscribe(data => {
      this.getComments();
    }
    );
  }


}
