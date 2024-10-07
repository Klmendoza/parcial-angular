import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { ModulInterface } from '../../interfaces/modul.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-modulo',
  standalone: true,
  imports:[NgForm],
  templateUrl: './crear-modulo.component.html',
  styleUrls: ['./crear-modulo.component.scss']
})
export class CrearModuloComponent {
  @Output() addModul = new EventEmitter<ModulInterface>();

  newModul: ModulInterface = {
    id_modul: 0,
    name_modul: '',
    imageUrl_modul: '',
    teacher_modul: '',
    numberStudents_modul: 0,
    description_modul: '',
    dateStart_modul: new Date(),
    dateEnd_modul: new Date(),
    type_modul: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.addModul.emit(this.newModul);
      // Resetear el formulario
      this.newModul = {
        id_modul: 0,
        name_modul: '',
        imageUrl_modul: '',
        teacher_modul: '',
        numberStudents_modul: 0,
        description_modul: '',
        dateStart_modul: new Date(),
        dateEnd_modul: new Date(),
        type_modul: ''
      };
    } else {
      alert('Por favor complete todos los campos.');
    }
  }
}
