import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart-service/cart.service';
import { Book } from '../services/google-book-service/types.service';

@Component({
  selector: 'app-whishlist-page',
  templateUrl: './whishlist-page.component.html',
  styleUrls: ['./whishlist-page.component.scss']
})
export class WhishlistPageComponent implements OnInit {
  display:boolean = false
  wishList$!:Observable<Book[]> 
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.wishList$ = this.cartService.getWishList()
  }
  deleteBook(book:Book){
    this.cartService.removeFromCart(book)
    this.wishList$ = this.cartService.getWishList()
  }
}

