import { Component } from '@angular/core';
import { ModulInterface } from './interfaces/modul.interface';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CrearModuloComponent } from './component/crear-modulo/crear-modulo.component';
import { ListaModuloComponent } from './component/lista-modulo/lista-modulo.component';
import { MostrarModuloComponent } from './component/mostrar-modulo/mostrar-modulo.component';
import { EditarModuloComponent } from './component/editar-modulo/editar-modulo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CrearModuloComponent,
    ListaModuloComponent,
    MostrarModuloComponent,
    EditarModuloComponent
  ]
})
export class AppComponent {
  moduls: ModulInterface[] = [];
  selectedModul: ModulInterface | null = null;
  showForm: boolean = false;

  addModul(modul: ModulInterface) {
    this.moduls.push(modul);
  }

  selectModul(modul: ModulInterface) {
    this.selectedModul = modul;
  }

  deleteModul(modul: ModulInterface) {
    this.moduls = this.moduls.filter(m => m.id_modul !== modul.id_modul);
  }

  updateModul(modul: ModulInterface) {
    const index = this.moduls.findIndex(m => m.id_modul === modul.id_modul);
    if (index > -1) {
      this.moduls[index] = modul;
    }
  }
}
