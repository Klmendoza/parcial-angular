import { Component, Input } from '@angular/core';
import { ModulInterface } from '../../interfaces/modul.interface';

@Component({
  selector: 'app-lista-modulo',
  templateUrl: './lista-modulo.component.html',
  standalone: true,
  styleUrls: ['./lista-modulo.component.scss']
})
export class ListaModuloComponent {
  @Input() moduls: ModulInterface[] = [];

  get uniqueTypes() {
    const types = this.moduls.map(modul => modul.type_modul);
    return [...new Set(types)]; // Filtra tipos únicos
  }
}
