import { Component } from '@angular/core';
import { ModulInterface } from './interfaces/modul.interface'; // Asegúrate de que la ruta sea correcta
import { NavbarComponent } from './component/navbar/navbar.component';
import { CrearModuloComponent } from './component/crear-modulo/crear-modulo.component';
import { ListaModuloComponent } from './component/lista-modulo/lista-modulo.component';
import { EditarModuloComponent } from './component/editar-modulo/editar-modulo.component';
import { MostrarModuloComponent } from './component/mostrar-modulo/mostrar-modulo.component';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports:[NavbarComponent, CrearModuloComponent,ListaModuloComponent,EditarModuloComponent, MostrarModuloComponent, NgIf ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  moduls: ModulInterface[] = []; // Aquí almacenarás la lista de módulos
  selectedModul?: ModulInterface; // Para almacenar el módulo seleccionado para editar

  // Método para agregar un nuevo módulo
  addModul(modul: ModulInterface) {
    this.moduls.push(modul);
  }

  // Método para seleccionar un módulo para editar
  selectModul(modul: ModulInterface) {
    this.selectedModul = modul;
  }

  // Método para actualizar un módulo
  updateModul(updatedModul: ModulInterface) {
    const index = this.moduls.findIndex(modul => modul.id === updatedModul.id);
    if (index !== -1) {
      this.moduls[index] = updatedModul;
      this.selectedModul = undefined; // Limpiar la selección después de actualizar
    }
  }

  // Método para eliminar un módulo
  deleteModul(modul: ModulInterface) {
    this.moduls = this.moduls.filter(m => m.id !== modul.id);
  }
}
