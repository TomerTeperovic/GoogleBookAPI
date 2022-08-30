import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { tap } from 'rxjs';
import { GoogleBookService } from '../services/google-book-service/google-book.service';
import { AkitaStoreStore } from './akita-store.store';

@Injectable({ providedIn: 'root' })
export class AkitaStoreService {

  constructor(private googleBookService:GoogleBookService,private akitaStoreStore:AkitaStoreStore) {}

  getBooks(query:string,page: number = 1){
    this.googleBookService.search(query,page).pipe(tap( entities =>{
      console.log(entities)
      this.akitaStoreStore.set(entities)
    })).subscribe()
  }
  getBook(volumeId: string){
    return this.googleBookService.getById(volumeId)
  }

}
