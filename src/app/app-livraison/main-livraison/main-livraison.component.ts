
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { Livraison } from 'src/app/core/model/livraison';
import { LivraisonService } from 'src/app/core/services/livraison.service';
import { Chart } from 'node_modules/chart.js'
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import swal from "sweetalert";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-main-livraison',
  templateUrl: './main-livraison.component.html',
  styleUrls: ['./main-livraison.component.css']
})
export class MainLivraisonComponent implements OnInit {

  x1: any;
  x: any
  x2: any;
  undelivered: number;
  sum: number;
  Livraison: any = [];
  searchText:any;
  http: HttpClient;
  y: Subscription
  i: number
  countLivraison:any;
  constructor(private livraisonService: LivraisonService, private router: Router) { }

  ngOnInit(): void {
    
    this.loadLivraisons()

    let countliv = Number(localStorage.getItem('countLivraison')) ;
    console.log("from ngoninit " +  countliv)
    this.generateChart();
    let delivered=localStorage.getItem('delivered')
    console.log("from ngoninit " +  delivered)
    let undelivered= Number(countliv)- Number(delivered)
    console.log(Number(undelivered))

   let pundelivered= ((undelivered / Number(countliv))*100)
   let pdelivered = 100 - pundelivered
    console.log("pourcentage un: "+pundelivered)
    console.log("pourcentage d: "+pdelivered)

    const myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: ['Livraison non delivrée', 'Livraison delivrée'],
        datasets: [{
          label: 'Le statut des livraisons',
          data: [pundelivered, pdelivered],
          backgroundColor: [
            'rgba(220,20,60)',
            'rgba(192,192,192)',

          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(192,192,192)',

          ],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
 

  //Get list of livraisons
  loadLivraisons() {
    this.Livraison=this.livraisonService.CurrentLivraison
    return this.livraisonService.getListLivraisonService().subscribe((data) => {
      this.Livraison = data;
      this.countLivraison = this.Livraison.length
      localStorage.setItem('countLivraison', this.countLivraison);
    })
    
    
  }
  
  // Delete livraison
  delete(livraison: Livraison) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this delivery!",
      icon: "warning",
      buttons: ["Cancel","Confirm"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.Livraison.indexOf(livraison)
          
          this.livraisonService.deleteLivraisonService(livraison.id).subscribe(
            ()=>this.Livraison.splice(i,1)
          )
         ;
          swal("Delivery has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Delivery  is safe!");
        }
      });
 
  }


  generateChart() {
    this.livraisonService.CountDelievered().subscribe( 
      (data:number) => {
         
      this.x1=data   

      localStorage.setItem('delivered', this.x1);

    }
    );
   
    }

    
  
  //update
  update(livraison: Livraison) {
    this.livraisonService.UpdateLivraison(livraison);
    this.router.navigate(['/add-livraison']);
  }
  
  pdfMaker() {
    let data: any = document.getElementById('livraisonpdf');
    html2canvas(data).then(canvas => {
      var imgData = canvas.toDataURL('image/png');
      var doc = new jsPDF('l', 'mm', 'a4');
      let imgHeight = canvas.height * 250 / canvas.width
      doc.addImage(imgData, 'PNG', 0, 10, 290, imgHeight)
      doc.save("livraison.pdf")

    });
  }
}
