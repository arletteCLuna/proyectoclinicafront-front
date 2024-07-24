import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataInformacion } from '../../interfaces/dataInformacion.interface';
import { UpdateInformacion } from '../../interfaces/updateInformacion.interface';

@Component({
  selector: 'app-admoninformacion',
  templateUrl: './admoninformacion.component.html',
  styleUrls: ['./admoninformacion.component.css']
})
export class AdmoninformacionComponent implements OnInit {
  updateInformacionForm!: FormGroup;
  informacion!: DataInformacion;

  constructor(private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    this.updateInformacionForm = this.fb.group({
      mision: ['', Validators.required],
      vision: ['', Validators.required],
      quienessomos: ['', Validators.required]
    });

    // Cargar la información actual al inicializar el componente
    this.loadInformacion();
  }

  loadInformacion() {
    const id = '1'; // Suponiendo que el ID de la información es 1
    this.loginService.getDataInformacion(id).subscribe(
      (data: DataInformacion) => {
        this.informacion = data;
        // Llenar el formulario con los datos actuales
        this.updateInformacionForm.patchValue({
          mision: this.informacion.mision,
          vision: this.informacion.vision,
          quienessomos: this.informacion.quienessomos
        });
      },
      error => {
        console.error('Error al cargar la información:', error);
      }
    );
  }

  onSubmit() {
    if (this.updateInformacionForm.valid) {
      const id = '1'; // Suponiendo que el ID de la información es 1
      const formData: UpdateInformacion = this.updateInformacionForm.value;
      this.loginService.updateInformacion(id, formData).subscribe(
        response => {
          console.log('Información actualizada correctamente', response);
          // Volver a cargar la información actualizada
          this.loadInformacion();
        },
        error => {
          console.error('Error al actualizar la información:', error);
        }
      );
    } else {
      console.error('El formulario es inválido. Por favor, complete todos los campos.');
    }
  }
}
