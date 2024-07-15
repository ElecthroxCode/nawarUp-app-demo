import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCompanyComponent } from './appointment-company.component';

describe('AppointmentCompanyComponent', () => {
  let component: AppointmentCompanyComponent;
  let fixture: ComponentFixture<AppointmentCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentCompanyComponent]
    });
    fixture = TestBed.createComponent(AppointmentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
