import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';

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
}
