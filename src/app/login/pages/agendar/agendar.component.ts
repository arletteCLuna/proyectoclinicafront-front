import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { DataServicio } from '../../interfaces/dataServicio.interface';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {
  servicios: DataServicio[] = [];  // Declarar la variable para almacenar los servicios

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  myForm: FormGroup = this.fb.group({
    fecha: ['', [Validators.required, this.validateAge.bind(this)]],
    hora: ['', [Validators.required]],
    motivo: ['', [Validators.required]],
    dentista: ['', [Validators.required]],
  });

  ngOnInit() {
    this.getServicios();
  }

  mostrarSeleccion(event: any) {
    const sexoSeleccionado = event.target.value;
    if (sexoSeleccionado === "") {
      alert("El campo es obligatorio");
    } else {
      alert("Has seleccionado: " + sexoSeleccionado);
    }
  }

  showAlert(message: string, alertClass: string) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${alertClass} fixed-top d-flex align-items-center justify-content-center`;
    alertDiv.textContent = message;
    alertDiv.style.fontSize = '20px';
    document.body.appendChild(alertDiv);
    setTimeout(() => {
      alertDiv.remove();
    }, 5000);
  }

  validateAge(control: any): { [key: string]: any } | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    if (selectedDate < today) {
      return { pastDate: true };
    }
    return null;
  }

  addCita() {
    let idByToken = localStorage.getItem('token');
    if (idByToken === null) return;
    this.loginService.addCita(this.myForm.value, idByToken).subscribe(data => {
      console.log(data);
      if (data.status === 200)
        this.showAlert('Cita agendada correctamente', 'alert-success');
        alert('Cita agendada correctamente');
    });
  }

  getServicios() {
    this.loginService.getServicios().subscribe(
      (data) => {
        this.servicios = data;
      },
      (error) => {
        console.error('Error obteniendo servicios:', error);
      }
    );
  }
}
