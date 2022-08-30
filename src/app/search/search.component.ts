import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
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
  @ViewChild('input') input: any; 
  booksLength: number = 0
  username$: Observable<string> | undefined
  books$: Observable<Book[]> | undefined = this.akitaStoreQuery.selectAll().pipe(tap((books)=>{this.booksLength = books.length}))
  loading$ = this.akitaStoreQuery.selectLoading()

  currentPage$ = new BehaviorSubject<number>(1) 
  
  constructor(private appService:AppService,private akitaStoreService:AkitaStoreService,
    private akitaStoreQuery:AkitaStoreQuery) { }
  ngOnInit(): void {
    this.username$ = this.appService.getUserName()
  }

  search(newSearh = true) {
    if (newSearh) this.currentPage$.next(1)
    of(this.input.nativeElement.value).pipe(
      debounceTime(1500),
      distinctUntilChanged(),
      tap( (query) => {
        this.akitaStoreService.getBooks(query, this.currentPage$.value)
      })
    ).subscribe();
  }

  nextPage(){
    if( this.booksLength >= 20){
      this.currentPage$.next(this.currentPage$.value + 1)
      this.search(false)
    }
    
  }
  prevPage(){
    if(this.currentPage$.value > 1){
      this.currentPage$.next(this.currentPage$.value - 1)
      this.search(false)
    }
  }
}
