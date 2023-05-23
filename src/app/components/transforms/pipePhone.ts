import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any): any {

    if (!value) return '';
    const telefoneFormatado = value.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    return telefoneFormatado ? telefoneFormatado : value;
  }
}
