import { Component, OnInit } from '@angular/core';
import { DataCita } from '../../interfaces/dataCita.interface';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  citas: DataCita[] = []; // Array to store all citas

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    const userId = localStorage.getItem('token'); // Assuming 'token' contains user ID
    if (userId !== null) {
      this.loginService.getAllCitasByUserId(userId).subscribe(data => {
        this.citas = data; // Assign retrieved citas to the array
      });
    }
  }

}
