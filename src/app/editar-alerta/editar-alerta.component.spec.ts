import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaralertaComponent } from './editar-alerta.component';

describe('EditaralertaComponent', () => {
  let component: EditaralertaComponent;
  let fixture: ComponentFixture<EditaralertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaralertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaralertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
