import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IProduct } from '../models/product.interface';
import { LoggerService } from '../../shared/services/logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';

const rootUrl = 'http://localhost:3000';
const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'gl-custom-header': 'kjasgfkjfkj'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private logger: LoggerService,
    private http: HttpClient
  ) { }

  getProducts(): Observable<Array<IProduct>> {
    this.logger.log('products requested');

    return this.http.get<Array<IProduct>>(`${rootUrl}/products`, options)
      .pipe(
        map((products) => this.addProperty(products)),
        retry(3),
        catchError(error => {
          console.log('ERR: ', error);
          return of(error);
        })
      );
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${rootUrl}/products`, product, options);
  }

  private addProperty(products: Array<IProduct>): Array<IProduct> {
    return products.map(product => ({
      ...product,
      created: new Date().toISOString()
    }));
  }
}
