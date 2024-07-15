import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountComponent } from './customer-account.component';

describe('CustomerAccountComponent', () => {
  let component: CustomerAccountComponent;
  let fixture: ComponentFixture<CustomerAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerAccountComponent]
    });
    fixture = TestBed.createComponent(CustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
