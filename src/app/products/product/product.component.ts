import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { ProductService } from './../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: IProduct = null;

  private params$ = this.activatedRoute.params;
  private queryParams$ = this.activatedRoute.queryParams;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    combineLatest([this.params$, this.queryParams$])
      .subscribe(([params, queryParams]) => {
        console.log('params: ', params);
        console.log('queryParams: ', queryParams);

        this.getProductById(params['id']);
      });

    console.log('snapshot: ', this.activatedRoute.snapshot);
    this.activatedRoute.data.subscribe(data => { console.log('data: ', data); });
    console.log('parent: ', this.activatedRoute.parent);
    console.log('routeConfig: ', this.activatedRoute.routeConfig);
  }

  private getProductById(id: number): void {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  navigateToProductsList(): void {
    this.router.navigateByUrl('/products');
  }

}
