import { Component } from '@angular/core';
import { Subject, throwError, of, interval, EMPTY, from } from 'rxjs';
import { retry, catchError, retryWhen, take } from 'rxjs/operators';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-error-handling',
  templateUrl: './error-handling.component.html',
})
export class ErrorHandlingComponent {

  logStream$ = new Subject();

  constructor(private es: ExerciseService) { }

  start() {
    this.es.randomError().pipe(
      catchError(err => {
        // return throwError('FEHLER');
        // return of(':-)');
        // return EMPTY;
        return from([1,2,3]);
      })
    ).subscribe(
      value => this.logStream$.next(value),
      err => this.logStream$.next('💥 ERROR: ' + err)
    );
  }
}
