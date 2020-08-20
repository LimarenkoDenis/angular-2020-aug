import { IProduct } from './../../products/models/product.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultAmount'
})
export class ResultAmountPipe implements PipeTransform {

  transform(value: IProduct[]): unknown {
    return value.length;
  }

}
