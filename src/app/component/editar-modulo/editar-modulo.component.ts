import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModulInterface } from '../../interfaces/modul.interface';

@Component({
  selector: 'app-editar-modulo',
  templateUrl: './editar-modulo.component.html',
  standalone: true,
  styleUrls: ['./editar-modulo.component.scss']
})
export class EditarModuloComponent {
  @Input() modul!: ModulInterface;
  @Output() updateModul = new EventEmitter<ModulInterface>();

  onSubmit() {
    this.updateModul.emit(this.modul);
  }
}
