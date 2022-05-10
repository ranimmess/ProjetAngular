import { Component, OnInit } from '@angular/core';
import { Livraison } from 'src/app/core/model/livraison';
import {  Input, Output ,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {
  @Input() livraison: Livraison;
  @Output() pdfGenerator = new EventEmitter<Livraison>();
  constructor() { }

  ngOnInit(): void {
  }
  pdfEvent()
  {
      this.pdfGenerator.emit(this.livraison);
  }
}
