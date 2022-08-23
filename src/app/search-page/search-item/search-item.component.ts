import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/mat-dialog/mat-dialog.component';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { Book } from 'src/app/services/google-book-service/types.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() book!: Book;
  
  constructor(private cartServise:CartService,public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MatDialogComponent, {
      width: '50%',
      height:'50%',
      data: this.book,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  bookAddToCart(){
    this.cartServise.addToCart(this.book!)
  }

}
