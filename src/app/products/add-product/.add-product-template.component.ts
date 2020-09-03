import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  data: IProduct = {
    id: null,
    title: null,
    description: null,
    price: null,
    photo: null,
    type: null
  };

  constructor() { }

  ngOnInit(): void {
  }

}
