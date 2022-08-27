import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart-service/cart.service';
import { Book } from '../services/google-book-service/types.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistComponent implements OnInit {

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
