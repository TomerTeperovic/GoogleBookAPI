import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AkitaStoreStore, AkitaStoreState } from './akita-store.store';

@Injectable({ providedIn: 'root' })
export class AkitaStoreQuery extends QueryEntity<AkitaStoreState> {

  constructor(protected override store: AkitaStoreStore) {
    super(store);
  }

}
