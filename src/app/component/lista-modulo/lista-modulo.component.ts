import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModulInterface } from '../../interfaces/modul.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-modulo',
  templateUrl: './lista-modulo.component.html',
  standalone: true,
  imports: [CommonModule],  // Agregar esto
  styleUrls: ['./lista-modulo.component.scss']
})
export class ListaModuloComponent {
  @Input() moduls: ModulInterface[] = [];
  @Output() selectModul = new EventEmitter<ModulInterface>();
  @Output() deleteModul = new EventEmitter<ModulInterface>();
}
