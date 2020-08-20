import { FilterPipe } from './../../shared/pipes/filter.pipe';
import { products } from './../__mock__/products';
import { IProduct } from './../models/product.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  isLoading: boolean = true;
  viewType: 'grid' | 'list' = 'list';
  searchTextControl: FormControl = new FormControl('');
  results

  constructor(
    private filterPipe: FilterPipe
  ) {
    setTimeout(() => {
      this.products = products;
      this.isLoading = false;
    }, 0);
  }

  switchView(){
    this.viewType === 'grid' ?
      this.viewType = 'list'
      : this.viewType = 'grid';
  }

  ngOnInit(): void {
  }

  likeProduct(id: number ) {
    console.log('Like - product list', id);

  }

  getResults(value: IProduct[], searchText: string): number {
    return this.filterPipe.transform(value, searchText).length;
  }

}
