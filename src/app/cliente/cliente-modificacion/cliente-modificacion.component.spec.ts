import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteModificacionComponent } from './cliente-modificacion.component';

describe('ClienteModificacionComponent', () => {
  let component: ClienteModificacionComponent;
  let fixture: ComponentFixture<ClienteModificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteModificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteModificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
