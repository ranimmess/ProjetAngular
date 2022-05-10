import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommantaireComponent } from './commantaire/commantaire.component';
import { CreateSujetComponent } from './create-sujet/create-sujet.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { SujetComponent } from './sujet/sujet.component';
import { UpdateSujetComponent } from './update-sujet/update-sujet.component';

const routes: Routes = [
  {path: 'sujets', component: SujetComponent},
  {path: 'comments', component: CommantaireComponent},
  {path: 'create-sujet', component: CreateSujetComponent},
  {path: '', redirectTo: 'sujets', pathMatch: 'full'},
  {path: 'update-sujet/:idSujet', component: UpdateSujetComponent},
  {path: 'viewPost/:idSujet', component: ViewPostComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
   