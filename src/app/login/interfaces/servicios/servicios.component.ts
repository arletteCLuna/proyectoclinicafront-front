import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { DataServicio } from '../dataServicio.interface';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
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
