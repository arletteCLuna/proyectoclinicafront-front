// contactopublico.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { DataContacto } from '../../interfaces/dataContacto.interface';

@Component({
  selector: 'app-contactopublico',
  templateUrl: './contactopublico.component.html',
  styleUrls: ['./contactopublico.component.css']
})
export class ContactopublicoComponent implements OnInit {

  agregarContactoForm!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.agregarContactoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
    });
  }

  agregarContacto() {
    const nuevaContacto = this.agregarContactoForm.value;
    this.loginService.createContacto(nuevaContacto).subscribe(
      (response) => {
        console.log('Nuevo contacto creado correctamente:', response);
        this.agregarContactoForm.reset();
      },
      (error) => {
        console.error('Error al crear contacto:', error);
      }
    );
  }
}
