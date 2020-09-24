import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IProduct } from '../models/product.interface';
import { AuthService } from '../../services/auth.service';

const rootUrl = 'http://localhost:3100';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(`${rootUrl}/products`);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${rootUrl}/products/${id}`);
  }

  getSum(a: number, b: number): number {
    return a + b;
  }

  getMultiplication(a: number, b: number): number {
    return a * b;
  }

  getObjectCopy(value: any): any {
    return ({...value});
  }

  getObjectMerge(value: any, value1: any): any {
    return ({...value, ...value1});
  }

  getAuthProducts(arg?: any): Observable<any> {
    return this.http.get<Array<IProduct>>(`${rootUrl}/products/${arg}`);
  }
}
