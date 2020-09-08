import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProducsGridComponent } from './producs-grid/producs-grid.component';
import { ProductComponent } from './product/product.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProducsGridComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
