import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brazilianDate'
})
export class BrazilianDatePipe implements PipeTransform {

  transform(date: string): string {
    if (!date) {
      return '';
    }

    const dateArray = date.split('-');

    if (dateArray.length !== 3) {
      return date;
    }

    return dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
  }

}
