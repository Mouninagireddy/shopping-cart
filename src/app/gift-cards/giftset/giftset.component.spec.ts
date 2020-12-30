import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsetComponent } from './giftset.component';

describe('GiftsetComponent', () => {
  let component: GiftsetComponent;
  let fixture: ComponentFixture<GiftsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
