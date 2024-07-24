import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { DataServicio } from '../../interfaces/dataServicio.interface';
//import { LoginService } from '../../../../../proyectoclinicafront-front/src/app/login/services/login.service';
//import { DataServicio } from '../../../../../proyectoclinicafront-front/src/app/login/interfaces/dataServicio.interface';
@Component({
  selector: 'app-serviciospublico',
  templateUrl: './serviciospublico.component.html',
  styleUrls: ['./serviciospublico.component.css']
})
export class ServiciospublicoComponent implements OnInit {
  servicios: DataServicio[] = [];

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.getServicios();
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
