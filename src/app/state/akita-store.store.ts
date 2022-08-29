import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Book } from '../services/google-book-service/types.service';


export interface AkitaStoreState extends EntityState<Book> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'akitaStore' })
export class AkitaStoreStore extends EntityStore<AkitaStoreState> {

  constructor() {
    super();
  }

}
