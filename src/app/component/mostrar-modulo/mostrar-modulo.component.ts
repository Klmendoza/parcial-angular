import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { ModulInterface } from '../../interfaces/modul.interface';

@Component({
  selector: 'app-mostrar-modulo',
  templateUrl: './mostrar-modulo.component.html',
  standalone: true,
  imports: [CommonModule], // Asegúrate de incluir CommonModule
  styleUrls: ['./mostrar-modulo.component.scss']
})
export class MostrarModuloComponent {
  @Input() moduls!: ModulInterface[];
}
