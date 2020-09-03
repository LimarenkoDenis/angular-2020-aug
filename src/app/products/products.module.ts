import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProducsGridComponent } from './producs-grid/producs-grid.component';
import { MaterialModule } from '../material/material.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    ProducsGridComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductListComponent
  ],
  entryComponents: [
    AddProductComponent
  ]
})
export class ProductsModule { }
