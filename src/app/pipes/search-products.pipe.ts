import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    if(search.length === 0) return products;
    return products.filter(el => 
      el.title.toLowerCase().includes(search.toLowerCase()) 
    );
  }

}
