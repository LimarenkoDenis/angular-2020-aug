import { IProduct } from './../../products/models/product.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IProduct[], searchtext: string): IProduct[] {

    if (!searchtext) {
      return value;
    }


    return value.filter((product: IProduct) => {
      return `${product.title}${product.description}`.toLowerCase().includes(searchtext.toLowerCase());
    });
  }

}
