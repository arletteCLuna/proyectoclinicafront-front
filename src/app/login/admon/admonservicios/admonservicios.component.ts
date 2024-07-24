import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { DataServicio } from '../../interfaces/dataServicio.interface';

@Component({
  selector: 'app-admonservicios',
  templateUrl: './admonservicios.component.html',
  styleUrls: ['./admonservicios.component.css']
})
export class AdmonserviciosComponent implements OnInit {
  servicioForm: FormGroup;
  servicios: DataServicio[] = [];
  mensaje: string = '';
  editMode: boolean = false;
  servicioEditadoId: number | null = null;
  nameFile: string = '';
  imagenes: File[] = [];

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.servicioForm = this.fb.group({
      id_servicio: [null],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      costo: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.obtenerServicios();
  }

  addImg(event:any){
    const target = event.target as HTMLInputElement;
    if (target?.files?.length) {
      for (let i = 0; i < target.files.length; i++) {
        this.nameFile = target.files[i].name;
        this.imagenes.push(target.files[i]);
      }
    }
  }
  obtenerServicios(): void {
    this.loginService.getServicios().subscribe(
      (data: DataServicio[]) => {
        this.servicios = data;
      },
      (error) => {
        console.error('Error al obtener servicios', error);
      }
    );
  }

  agregarServicio(): void {
    if (this.servicioForm.valid) {
      const formData = new FormData();
      formData.append('nombre', this.servicioForm.value.nombre);
      formData.append('descripcion', this.servicioForm.value.descripcion);
      formData.append('costo', this.servicioForm.value.costo);
      formData.append('imagen', this.imagenes[0]);

      this.loginService.createServicio(formData).subscribe(
        (response) => {
          this.mensaje = 'Servicio creado correctamente';
          this.servicioForm.reset();
          this.obtenerServicios();
        },
        (error) => {
          console.error('Error al crear servicio', error);
          this.mensaje = 'Error al crear servicio';
        }
      );
    }
  }

  editarServicio(servicio: DataServicio): void {
    this.editMode = true;
    this.servicioEditadoId = servicio.id_servicio;
    this.servicioForm.patchValue(servicio);
  }

  guardarEdicion(): void {
    if (this.servicioForm.valid && this.servicioEditadoId !== null) {
      this.loginService.updateServicio(this.servicioEditadoId, this.servicioForm.value).subscribe(
        (response) => {
          this.mensaje = 'Servicio actualizado correctamente';
          this.resetForm();
          this.obtenerServicios();
        },
        (error) => {
          console.error('Error al actualizar servicio', error);
          this.mensaje = 'Error al actualizar servicio';
        }
      );
    }
  }

  eliminarServicio(id: number): void {
    this.loginService.removeServicio(id).subscribe(
      (response) => {
        this.mensaje = 'Servicio eliminado correctamente';
        this.obtenerServicios();
      },
      (error) => {
        console.error('Error al eliminar servicio', error);
        this.mensaje = 'Error al eliminar servicio';
      }
    );
  }

  resetForm(): void {
    this.servicioForm.reset();
    this.editMode = false;
    this.servicioEditadoId = null;
  }
}
