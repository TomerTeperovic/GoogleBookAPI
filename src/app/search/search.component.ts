import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AppService } from '../services/app-service/app.service';
import { GoogleBookService } from '../services/google-book-service/google-book.service';
import { Book } from '../services/google-book-service/types.service';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

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
