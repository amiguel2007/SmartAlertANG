import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaralertasComponent } from './listar-alertas.component';

describe('ListaralertasComponent', () => {
  let component: ListaralertasComponent;
  let fixture: ComponentFixture<ListaralertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaralertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaralertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
