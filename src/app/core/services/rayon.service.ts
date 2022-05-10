import { Injectable } from '@angular/core';
import { Rayon } from '../model/rayon';
import { environment } from 'src/environments/environment';
import {Produit} from "../../core/model/produit";
import {
  HttpClient
} from '@angular/common/http';
import { NumberSymbol } from '@angular/common';
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class RayonService {
  url="http://localhost:8091/SpringMVC/rayon/"

  constructor(private http: HttpClient) { }
  CurrentRayon:Rayon;
  status:boolean=false;
  MODRayon(rayon : Rayon){
    this.CurrentRayon=rayon;
  }

    UpdateRayon(rayon :Rayon){
      this.CurrentRayon=rayon;
      this.status=true;
    }
    getListRayonService(){
      return this.http.get<Rayon[]>(this.url+'retrive-all-rayon')
      
      }
      addRayonService(rayon: Rayon){
  
        return this.http.post(this.url+'add-rayon', rayon)
      }
      deleteRayonService(idRayon:string){
        return this.http.delete(this.url+'/remove-rayon/{idRayon}/'+idRayon)
      }
      updateRayonService(rayon: Rayon, idRayon:any){
        return this.http.put(this.url+'modify-rayon/'+idRayon,rayon)
      }
    
  
  }
  

  

