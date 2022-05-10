import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-app-star',
  templateUrl: './app-star.component.html',
  styleUrls: ['./app-star.component.css']
})
export class AppStarComponent implements OnInit {
  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = [];
  snackBarDuration = 1000;
  response = [
    'You broke my heart!',
    'Really?',
    'We will do better next time.',
    'Glad you like it!',
    'Thank you so much!'
  ]
  constructor(
    private snackBar: MatSnackBar) {
    // default to no rating, i.e. all empty stars
    this.ratingArr = Array(this.starCount).fill(false);
  }

  ngOnInit(): void {

  }
  returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(i: number) {
    this.rating = i + 1;
    this.snackBar.open(this.response[i], '', {
      duration: this.snackBarDuration,
      panelClass: ['snack-bar']
    });

  }

}


