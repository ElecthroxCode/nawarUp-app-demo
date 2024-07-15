import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCompanyComponent } from './perfil-company.component';

describe('PerfilCompanyComponent', () => {
  let component: PerfilCompanyComponent;
  let fixture: ComponentFixture<PerfilCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilCompanyComponent]
    });
    fixture = TestBed.createComponent(PerfilCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
