import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilClientComponent } from './perfil-client.component';

describe('PerfilClientComponent', () => {
  let component: PerfilClientComponent;
  let fixture: ComponentFixture<PerfilClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilClientComponent]
    });
    fixture = TestBed.createComponent(PerfilClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
