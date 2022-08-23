import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../services/cart-service/cart.service';
import { Book } from '../services/google-book-service/types.service';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss']
})
export class MatDialogComponent implements OnInit {

  constructor(private cartServise:CartService,public dialogRef: MatDialogRef<MatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book,) {}

  ngOnInit(): void {
  }
  bookAddToCart(){
    this.cartServise.addToCart(this.data!)
  }

}
