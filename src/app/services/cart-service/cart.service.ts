import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Book } from '../google-book-service/types.service';



@Injectable({  
  providedIn: 'root'
})
export class CartService {
  private wishList:Book[] = []
  constructor() { }
  addToCart(book:Book){
    this.wishList.push(book)
  }
  removeFromCart(book:Book){
    this.wishList = this.wishList.filter(item => item !== book);
  }
  getWishList(){
     return of(this.wishList)
  }

}