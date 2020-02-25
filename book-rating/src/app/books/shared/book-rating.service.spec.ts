import { TestBed } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';

describe('BookRatingService', () => {
  let service: BookRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
