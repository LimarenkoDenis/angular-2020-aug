import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { IProduct } from '../../../products/models/product.interface';
import { Router } from '@angular/router';

@Component({
  template: `
    <app-card
      [isOdd]="isOdd"
      [product]="product"
    ></app-card>
  `
})
class HostComponent {
  isOdd = false;
  product: IProduct = {
    id: 1,
    title: 'Test',
    description: 'Test description',
    type: 'test',
    photo: null
  };
}

fdescribe('CardComponent', () => {
  let hostComponent: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  const router = jasmine.createSpyObj('router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostComponent, CardComponent ],
      providers: [
        {
          provide: Router,
          useValue: router
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('fixture: ', () => {
    it('should work', () => {
      console.log('hostComponent: ', hostComponent);
      console.log('fixture: ', fixture);

      // console.log(fixture.nativeElement.querySelectorAll('.like-btn'));
      console.log(fixture.nativeElement.querySelector('.example-card'));
    });
  });
});


// describe('CardComponent', () => {
//   let component: CardComponent;
//   let fixture: ComponentFixture<CardComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CardComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CardComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
