import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLettreUpperCase'
})
export class FirstLettreUpperCasePipe implements PipeTransform {

  transform(value: string): string {
     let temp :string = value.substring(1);
    return "Dr. "+value.charAt(0).toUpperCase() +temp;

  }

}
