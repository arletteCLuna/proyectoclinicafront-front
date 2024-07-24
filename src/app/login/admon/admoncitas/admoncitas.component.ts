import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { DataCita } from '../../interfaces/dataCita.interface';

@Component({
  selector: 'app-admoncitas',
  templateUrl: './admoncitas.component.html',
  styleUrls: ['./admoncitas.component.css']
})
export class AdmoncitasComponent implements OnInit {
  dataCita: DataCita[] = [];

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.obtenerTodasLasCitas();
  }

  obtenerTodasLasCitas() {
    this.loginService.getCita().subscribe(
      (data: DataCita[]) => {
        this.dataCita = data;
      },
      error => {
        console.log('Error al obtener las citas:', error);
      }
    );
  }
}
