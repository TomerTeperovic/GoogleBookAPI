import { TestBed } from '@angular/core/testing';

import { GoogleBookService } from './google-book.service';

describe('GoogleBookService', () => {
  let service: GoogleBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
