import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { map, concatMap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit(): void {
    // const isbn = this.route.snapshot.paramMap.get('isbn');

    // TODO: Verschachtelte Subscription auflösen
    // import { map } from 'rxjs/operators';
    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('isbn')),
      switchMap(isbn => this.bs.getSingle(isbn))
    );

  }

}
