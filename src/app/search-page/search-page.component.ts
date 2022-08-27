import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

import { GoogleBookService } from '../services/google-book-service/google-book.service';
import { Book } from '../services/google-book-service/types.service';

import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { AppService } from '../services/app-service/app.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit{
  username$: Observable<string> | undefined
  searchValue = ''
  books$: Observable<Book[]> | undefined;
  
  constructor(private googleBookService:GoogleBookService, private appService:AppService) { }
  ngOnInit(): void {
    this.username$ = this.appService.getUserName()
  }



  search(query:string) {
    from(query).pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap( (query:string) => {
        this.searchValue = query
        this.books$ = this.googleBookService.search(query)
      })
    ).subscribe();
  }

}
