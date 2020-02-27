import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';


  constructor() {

    function producer(obs) {
      obs.next(1);
      obs.next(2);

      setTimeout(() => {
        obs.next(3);
        obs.complete();
      }, 2000);
    }

    const observer = {
      next: e => console.log(e),
      error: err => console.error(err),
      complete: () => console.log('Chemnitz')
    };

    const myObs$ = new Observable(producer);

    myObs$.pipe(
      // map(e => e * 100),
      filter(e => e > 200)
    ).subscribe(observer);

  }
}
