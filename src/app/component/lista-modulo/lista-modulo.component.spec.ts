import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaModuloComponent } from './lista-modulo.component';

describe('ListaModuloComponent', () => {
  let component: ListaModuloComponent;
  let fixture: ComponentFixture<ListaModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaModuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
