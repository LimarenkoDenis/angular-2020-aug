import { FilterPipe } from './../../shared/pipes/filter.pipe';
import { products } from './../__mock__/products';
import { IProduct } from './../models/product.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from '../services/product.service';

import { delay, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';

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
    private productService: ProductService,
    private dialog: MatDialog
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
    this.getProducts();
  }

  likeProduct(id: number ) {
    console.log('Like - product list', id);

  }

  getResults(value: IProduct[], searchText: string): number {
    return this.filterPipe.transform(value, searchText).length;
  }

  openAddProductDialog(): void {
    const addProductDialogRef = this.dialog.open(AddProductComponent);

    addProductDialogRef.afterClosed().pipe(
      map(result => {
        console.log('add product: ', result);

        return result;
      })
    ).subscribe((result: IProduct) => {
      this.productService
        .createProduct(result)
        .subscribe(createdProduct => {
          console.log('created: ', createdProduct);
          this.getProducts();
        });
    });
  }

  private getProducts(): void {
    this.productService
      .getProducts()
      .subscribe(result => {
        console.log('result: ', result);
        this.products = result;
      });
  }
}
