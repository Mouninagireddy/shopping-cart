import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersnavComponent } from './ordersnav.component';

describe('OrdersnavComponent', () => {
  let component: OrdersnavComponent;
  let fixture: ComponentFixture<OrdersnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
