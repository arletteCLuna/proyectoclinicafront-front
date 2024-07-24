import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgendarComponent } from './pages/agendar/agendar.component';
import { HeaderComponent } from './interfaces/header/header.component';
import { BreadcrumbsComponent } from './interfaces/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './interfaces/footer/footer.component';
import { ContactoComponent } from './interfaces/contacto/contacto.component';
import { ServiciosComponent } from './interfaces/servicios/servicios.component';
import { QuienessomosComponent } from './interfaces/quienessomos/quienessomos.component';
import { UbicacionComponent } from './interfaces/ubicacion/ubicacion.component';
import { PreguntasComponent } from './interfaces/preguntas/preguntas.component';
import { TerminosCondicionesComponent } from './interfaces/terminosCondiciones/terminosCondiciones.component';
import { PoliticaCookiesComponent } from './interfaces/politicaCookies/politicaCookies.component';
import { AvisoPrivacidadComponent } from './interfaces/avisoPrivacidad/avisoPrivacidad.component';
import { E404Component } from './interfaces/e404/e404.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { HistorialComponent } from './pages/historial/historial.component';
//publico 
import { HeaderpublicoComponent } from './publico/headerpublico/headerpublico.component';
import { ServiciospublicoComponent } from './publico/serviciospublico/serviciospublico.component';
import { IniciopublicoComponent } from './publico/iniciopublico/iniciopublico.component';
import { UbicacionpublicoComponent } from './publico/ubicacionpublico/ubicacionpublico.component';
import { AvisoprivacidadpublicoComponent } from './publico/avisoprivacidadpublico/avisoprivacidadpublico.component';
import { ContactopublicoComponent } from './publico/contactopublico/contactopublico.component';
import { FooterpublicoComponent } from './publico/footerpublico/footerpublico.component';
import { PoliticacookiespublicoComponent } from './publico/politicacookiespublico/politicacookiespublico.component';
import { PreguntaspublicoComponent } from './publico/preguntaspublico/preguntaspublico.component';
import { QuienessomospublicoComponent } from './publico/quienessomospublico/quienessomospublico.component';
import { TerminosycondicionespublicoComponent } from './publico/terminosycondicionespublico/terminosycondicionespublico.component';
//admon
import { HeaderadmonComponent } from './admon/headeradmon/headeradmon.component';
import { AdmoncitasComponent } from './admon/admoncitas/admoncitas.component';
import { AdmoninformacionComponent } from './admon/admoninformacion/admoninformacion.component';
import { AdmonusuariosComponent } from './admon/admonusuarios/admonusuarios.component';
import { AdmonpreguntasComponent } from './admon/admonpreguntas/admonpreguntas.component';
import { AdmonserviciosComponent } from './admon/admonservicios/admonservicios.component';
//CAPTCHA//
import { NgxCaptchaModule } from 'ngx-captcha';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    LoginComponent,
    CrearCuentaComponent,
    RecuperarPasswordComponent,
    LayoutComponent,
    InicioComponent,
    AgendarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    ContactoComponent,
    ServiciosComponent,
    QuienessomosComponent,
    UbicacionComponent,
    AvisoPrivacidadComponent,
    PoliticaCookiesComponent,
    TerminosCondicionesComponent,
    PreguntasComponent,
    E404Component,
    PerfilComponent,
    EditarPerfilComponent,
    HistorialComponent,
    //admon
    HeaderadmonComponent,
    AdmoncitasComponent,
    AdmoninformacionComponent,
    AdmonusuariosComponent,
    AdmonpreguntasComponent,
    AdmonserviciosComponent,
    //publico
    HeaderpublicoComponent,
    ServiciospublicoComponent,
    IniciopublicoComponent,
    UbicacionpublicoComponent,
    AvisoprivacidadpublicoComponent,
    ContactopublicoComponent,
    FooterpublicoComponent,
    PoliticacookiespublicoComponent,
    PreguntaspublicoComponent,
    QuienessomospublicoComponent,
    TerminosycondicionespublicoComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers:[LoginService]
})
export class LoginModule { }
