import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducsGridComponent } from './producs-grid.component';

describe('ProducsGridComponent', () => {
  let component: ProducsGridComponent;
  let fixture: ComponentFixture<ProducsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
