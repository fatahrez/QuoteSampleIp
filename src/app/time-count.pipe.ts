import {ChangeDetectorRef, Pipe } from '@angular/core';
import {AsyncPipe} from '@angular/common';
import { parse, distanceInWordsToNow } from 'date-fns';
import {Observable, timer} from 'rxjs';
import {distinctUntilChanged, map, tap} from 'rxjs/operators';

@Pipe({
  name: 'timeCount',
  pure: false
})
export class TimeCountPipe extends AsyncPipe {
  private time: Date;
  private formatted$: Observable<string>;

  constructor(private cd: ChangeDetectorRef) {
    super(cd);

    this.formatted$ = timer(0, 1000).pipe(
      map(() => distanceInWordsToNow(this.time, { addSuffix: true, includeSeconds: true })),
      distinctUntilChanged(),
      tap(time => console.log('new time:', time)),
    );
  }

  public transform(value: any): any {
    this.time = parse(value);
    return super.transform(this.formatted$);
  }
}
