import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaralertaComponent } from './agregar-alerta.component';

describe('AgregaralertaComponent', () => {
  let component: AgregaralertaComponent;
  let fixture: ComponentFixture<AgregaralertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaralertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaralertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
