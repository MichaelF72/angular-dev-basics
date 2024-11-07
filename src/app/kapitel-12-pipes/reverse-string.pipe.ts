import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'reverseString',
})
export class ReverseStringPipe implements PipeTransform {
  // (7) Implementierung der PipeTransform-Schnittstelle
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
