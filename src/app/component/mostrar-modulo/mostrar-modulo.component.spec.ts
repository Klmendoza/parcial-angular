import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarModuloComponent } from './mostrar-modulo.component';

describe('MostrarModuloComponent', () => {
  let component: MostrarModuloComponent;
  let fixture: ComponentFixture<MostrarModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarModuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
