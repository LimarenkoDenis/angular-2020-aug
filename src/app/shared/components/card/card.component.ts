import { IProduct } from './../../../products/models/product.interface';
import { products } from './../../../products/__mock__/products';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  product: IProduct;

  @Output()
  likeProductEvent: EventEmitter<number> = new EventEmitter();


  productImg: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  productAlt = 'Photo of a Shiba Inu';

  constructor() { }

  ngOnInit(): void {

    console.log(this.product);

  }


  likeProduct(id: number) {
    this.likeProductEvent.emit(id)
  }

  hoverProduct() {
    console.log('Hover');

  }
}
