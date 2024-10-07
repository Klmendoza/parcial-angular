import { Component, EventEmitter, Output } from '@angular/core';
import { ModulInterface } from '../../interfaces/modul.interface';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule

@Component({
  selector: 'app-crear-modulo',
  standalone: true,
  templateUrl: './crear-modulo.component.html',
  styleUrls: ['./crear-modulo.component.scss'],
  imports: [ReactiveFormsModule] // Agregar ReactiveFormsModule aquí
})
export class CrearModuloComponent {
  @Output() addModul = new EventEmitter<ModulInterface>();
  newModulForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newModulForm = this.fb.group({
      name_modul: ['', Validators.required],
      imageUrl_modul: ['', Validators.required],
      teacher_modul: ['', Validators.required],
      numberStudents_modul: [0, [Validators.required, Validators.min(1)]],
      description_modul: ['', Validators.required],
      dateStart_modul: [new Date(), Validators.required],
      dateEnd_modul: [new Date(), Validators.required],
      type_modul: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.newModulForm.valid) {
      this.addModul.emit(this.newModulForm.value);
      this.newModulForm.reset();
    } else {
      alert('Por favor complete todos los campos.');
    }
  }
}
