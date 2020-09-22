import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { FilterPipe } from './../../shared/pipes/filter.pipe';
// import { products } from './../__mock__/products';
import { IProduct } from './../models/product.interface';
import { State } from '../../reducers/index';
import { FetchProducts } from '../../actions/product-list.actions';
import { productsSelector } from 'src/app/reducers/product-list.reducer';

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
  // results

  products$: Observable<Array<IProduct>>;

  constructor(
    private filterPipe: FilterPipe,
    private store: Store<State>
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
    this.products$ = this.store
    .pipe(
      tap(result => { console.log(result); }),
      select(productsSelector)
    );

    this.store.dispatch(new FetchProducts());
  }

  likeProduct(id: number ) {
    console.log('Like - product list', id);

  }

  getResults(value: IProduct[], searchText: string): number {
    return this.filterPipe.transform(value, searchText).length;
  }

}
