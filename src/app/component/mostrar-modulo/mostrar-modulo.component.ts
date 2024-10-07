import { Component, Input } from '@angular/core';
import { ModulInterface } from '../../interfaces/modul.interface';

@Component({
  selector: 'app-mostrar-modulo',
  templateUrl: './mostrar-modulo.component.html',
  standalone: true,
  styleUrls: ['./mostrar-modulo.component.scss']
})
export class MostrarModuloComponent {
  @Input() modul!: ModulInterface;
}
