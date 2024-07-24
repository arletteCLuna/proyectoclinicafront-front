import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { DataPreguntas } from '../../interfaces/dataPreguntas.interface';

@Component({
  selector: 'app-preguntaspublico',
  templateUrl: './preguntaspublico.component.html',
  styleUrls: ['./preguntaspublico.component.css']
})
export class PreguntaspublicoComponent implements OnInit {

  preguntas: DataPreguntas[] = [];

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.getPreguntas();
  }

  getPreguntas() {
    this.loginService.getPreguntas().subscribe(
      (data) => {
        this.preguntas = data;
      },
      (error) => {
        console.error('Error obteniendo preguntas:', error);
      }
    );
  }
}
