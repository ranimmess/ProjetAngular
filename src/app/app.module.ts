import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SujetComponent } from './sujet/sujet.component';
import { CommantaireComponent } from './commantaire/commantaire.component';
import { CreateSujetComponent } from './create-sujet/create-sujet.component';
import { FormsModule } from '@angular/forms';
import { UpdateSujetComponent } from './update-sujet/update-sujet.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    SujetComponent,
    CommantaireComponent,
    CreateSujetComponent,
    UpdateSujetComponent,
    HeaderComponent,
    SideBarComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
