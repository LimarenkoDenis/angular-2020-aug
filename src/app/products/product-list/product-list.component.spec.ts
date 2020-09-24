import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { Store } from '@ngrx/store';
import { FetchProducts } from '../../actions/product-list.actions';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let consoleLogSpy;

  const mockStore = jasmine.createSpyObj('Store', ['select', 'dispatch', 'subscribe', 'pipe']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      providers: [
        FilterPipe,
        {
          provide: Store,
          useValue: mockStore
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    consoleLogSpy = spyOn(console, 'log').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Store', () => {
    it('should dispatch action', () => {
      expect(component['store'].dispatch).toHaveBeenCalled();
      expect(component['store'].dispatch).toHaveBeenCalledWith(new FetchProducts());
    });
  });

  describe('likeProduct: ', () => {
    it('should "like" product', () => {
      component.likeProduct(5);

      expect(consoleLogSpy).toHaveBeenCalled();
      expect(consoleLogSpy).toHaveBeenCalledWith('Like - product list', 5);
    });
  });
});
