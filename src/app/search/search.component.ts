import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AppService } from '../services/app-service/app.service';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

import { AkitaStoreService } from '../state/akita-store.service';
import { AkitaStoreQuery } from '../state/akita-store.query';
import { Book } from '../services/google-book-service/types.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  username$: Observable<string> | undefined
  books$: Observable<Book[]> | undefined = this.akitaStoreQuery.selectAll()
  loading$ = this.akitaStoreQuery.selectLoading()
  
  constructor(private appService:AppService,private akitaStoreService:AkitaStoreService,
    private akitaStoreQuery:AkitaStoreQuery) { }
  ngOnInit(): void {
    this.username$ = this.appService.getUserName()
  }

  search(query:string) {
    from(query).pipe(
      debounceTime(1500),
      distinctUntilChanged(),
      tap( (query:string) => {
        console.log(query)
        this.akitaStoreService.getBooks(query)
      })
    ).subscribe();
  }

}
