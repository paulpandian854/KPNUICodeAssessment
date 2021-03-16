import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
  transform(value: string) {
      if(value ==='SPR') return 'Sprinter'
      if(value === 'IC') return 'Intercity'
    return value;
  }
}