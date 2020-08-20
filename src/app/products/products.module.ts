import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
