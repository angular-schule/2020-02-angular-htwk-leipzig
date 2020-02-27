import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent implements OnInit {

  currentWidth = 0;

  ngOnInit() {

    /******************************/

    fromEvent(window, 'resize').pipe(
      debounceTime(1000),
      map(() => window.innerWidth),
      startWith(window.innerWidth),
    ).subscribe(e => this.currentWidth = e);

    /******************************/
  }

}
