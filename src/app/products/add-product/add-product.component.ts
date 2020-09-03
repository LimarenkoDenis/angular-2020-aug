import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  data: IProduct = {
    id: null,
    title: 'Test title',
    description: 'Test description',
    price: 0,
    photo: null,
    type: null
  };

  formGroup: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddProductComponent>
  ) {
    this.formGroup = new FormGroup({
      title: new FormControl(this.data.title, [Validators.required, Validators.minLength(5)]),
      description: new FormControl(this.data.description),
      price: new FormControl(this.data.price, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  addProduct(): void {
    this.dialogRef.close({...this.formGroup.value});
  }

}
