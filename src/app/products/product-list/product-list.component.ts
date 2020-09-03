import { FilterPipe } from './../../shared/pipes/filter.pipe';
import { products } from './../__mock__/products';
import { IProduct } from './../models/product.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from '../services/product.service';

import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  isLoading: boolean = true;
  viewType: 'grid' | 'list' = 'list';
  searchTextControl: FormControl = new FormControl('');
  // results

  constructor(
    private filterPipe: FilterPipe,
    private productService: ProductService
  ) {
    setTimeout(() => {
      // this.products = products;
      this.isLoading = false;
    }, 0);
  }

  switchView(){
    this.viewType === 'grid' ?
      this.viewType = 'list'
      : this.viewType = 'grid';
  }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe(result => {
        console.log('result: ', result);
        this.products = result;
      });
  }

  likeProduct(id: number ) {
    console.log('Like - product list', id);

  }

  getResults(value: IProduct[], searchText: string): number {
    return this.filterPipe.transform(value, searchText).length;
  }

}
