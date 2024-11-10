import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'progres',
  standalone: true
})
export class ProgressPipe implements PipeTransform {

  transform(value: number): number {

    if(value > 100) { return 100 }
    
    return value;
  }

}
