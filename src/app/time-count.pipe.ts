import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount',
  pure: true
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateDifference = Math.abs(value - todayWithNoTime);
    const secondsInDay = 86400;
    const dateDifferenceSeconds = dateDifference * 0.001;
    const dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    } else {
      return 0;
    }
  }
}
