import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sujet } from '../sujet';
import { SujetService } from '../sujet.service';

@Component({
  selector: 'app-create-sujet',
  templateUrl: './create-sujet.component.html',
  styleUrls: ['./create-sujet.component.css']
})
export class CreateSujetComponent implements OnInit {

  createPostForm: FormGroup;
  sujet: Sujet = new Sujet();
  constructor(private sujetService: SujetService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
saveSujet(){
  this.sujetService.createSujet(this.sujet).subscribe( data =>{
    console.log(data);
    this.goToSujetList();
  },
  error => console.log(error));

  
  this.createPostForm = new FormGroup({
    postName: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
}

goToSujetList(){
this.router.navigate(['/sujets']);
}
  onSubmit(){
    console.log(this.sujet);
    this.saveSujet();
  }
}
