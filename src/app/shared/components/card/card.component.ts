import { IProduct } from './../../../products/models/product.interface';
import { products } from './../../../products/__mock__/products';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  product: IProduct;

  @Input()
  isOdd: boolean;

  @Output()
  likeProductEvent: EventEmitter<number> = new EventEmitter();

  date: Date = new Date();
  productImg: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  productAlt = 'Photo of a Shiba Inu';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    console.log(this.product);

  }


  likeProduct(id: number) {
    this.likeProductEvent.emit(id);
  }

  hoverProduct() {
    console.log('Hover');

  }

  navigateToProduct(id: number): void {
    this.router.navigate(['/products', id], {
      queryParams: {
        test: true,
        productId: id,
        data: 'encodeddata'
      },
      queryParamsHandling: 'merge'
    });
  }
}
