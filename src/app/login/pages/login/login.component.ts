import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) { }

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  passwordVisible: boolean = false;
  logosinfondo: string = "assets/images/logosinfondo.png";
  siteKey = '6Ld9vlUpAAAAAIBxg_WAyAL3v782D0Sv_HefWBjy';
  validRecatcha: boolean = true;
  myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    contrasena: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
  });

  auth() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    try {
      let fecha = new Date().toLocaleDateString();
      this.loginService.getIp().subscribe(data => {
        this.loginService.validarUsuario({
          email: this.myForm.controls['email'].value,
          contrasena: this.myForm.controls['contrasena'].value,
          fecha: fecha,
          ip: data.ip
        }).subscribe(res => {
          console.log(res);
          if (res.status === 200) {
            localStorage.setItem("token", res.token.toString())
            this.router.navigate(['/user/inicio']);

          } else if (res.status === 400) {
            alert('Contraseña incorrecta');
          } else if (res.status === 409) {
            alert('Número de intentos alcanzados, espera 5 minutos');
          } else if (res.status === 302) {
            alert('Email no registrado');
          } else {
            alert('Error de lo que sea pero error');
          }
        });
      })

    } catch (error) {
      alert('Email no encontrado');
      console.log(error);
    }
  }





  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  aplicarInterlineado() {
    const elemento = document.querySelector('.pass-link a') as HTMLAnchorElement | null;
    if (elemento) {
      elemento.style.lineHeight = '2'; // Cambia este valor según tus preferencias de interlineado
    }
  }

  isEmailFieldActive(): boolean {
    const emailControl = this.myForm.get('email');
    return emailControl ? emailControl.touched || emailControl.value !== '' : false;
  }

  moveLabelUp(): void {
    const fieldElement = document.querySelector('.field');
    if (fieldElement) {
      fieldElement.classList.add('active');
    }
  }

  moveLabelDown(): void {
    const emailControl = this.myForm.get('email');
    if (emailControl?.invalid) {
      document.querySelector('.field')?.classList.remove('active');
    }
  }

  resaltarInput: boolean = false;

  cambiarColorInput() {
    this.resaltarInput = !this.resaltarInput;
  }

  handleKeyUp(): void {
    if (this.myForm.valid) {
      console.log('Formulario válido');
    } else {
      console.log('Formulario inválido');
    }
  }

  activarBtnCapcha(event: string) {
    this.validRecatcha = false;
  }
}

