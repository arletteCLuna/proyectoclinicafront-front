import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgendarComponent } from './pages/agendar/agendar.component';
import { HeaderComponent } from './interfaces/header/header.component';
import { FooterComponent } from './interfaces/footer/footer.component';
import { ContactoComponent } from './interfaces/contacto/contacto.component';
import { ServiciosComponent } from './interfaces/servicios/servicios.component';
import { UbicacionComponent } from './interfaces/ubicacion/ubicacion.component';
import { QuienessomosComponent } from './interfaces/quienessomos/quienessomos.component';
import { AvisoPrivacidadComponent } from './interfaces/avisoPrivacidad/avisoPrivacidad.component';
import { TerminosCondicionesComponent } from './interfaces/terminosCondiciones/terminosCondiciones.component';
import { PoliticaCookiesComponent } from './interfaces/politicaCookies/politicaCookies.component';
import { PreguntasComponent } from './interfaces/preguntas/preguntas.component';
import { E404Component } from './interfaces/e404/e404.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { canActivate, canMatch } from './guards/guards.guard';
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
//administrador
import { HeaderadmonComponent} from './admon/headeradmon/headeradmon.component';
import { AdmoncitasComponent } from './admon/admoncitas/admoncitas.component';
import { AdmoninformacionComponent } from './admon/admoninformacion/admoninformacion.component';
import { AdmonusuariosComponent } from './admon/admonusuarios/admonusuarios.component';
import { AdmonpreguntasComponent } from './admon/admonpreguntas/admonpreguntas.component';
import { AdmonserviciosComponent } from './admon/admonservicios/admonservicios.component';
const routes: Routes = [
  {
    path: 'user',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      ///
      {
        path: 'admoncitas',
        component: AdmoncitasComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'admoninformacion',
        component: AdmoninformacionComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'admonusuarios',
        component: AdmonusuariosComponent ,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'admonpreguntas',
        component: AdmonpreguntasComponent ,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },


      {
        path: 'admonservicios',
        component: AdmonserviciosComponent ,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },

      //
      {
        path: 'header',
        component: HeaderComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
//publico
      {
        path: 'headerpublico',
        component: HeaderpublicoComponent
      },
      {
        path: 'iniciopublico',
        component: IniciopublicoComponent
      },
      {
        path: 'ubicacionpublico',
        component: UbicacionpublicoComponent
      },
      {
        path: 'avisoprivacidadpublico',
        component: AvisoprivacidadpublicoComponent
      },
      {
        path: 'contactopublico',
        component: ContactopublicoComponent
      },
      {
        path: 'footerpublico',
        component: FooterpublicoComponent
      },
      {
        path: 'politicacookiespublico',
        component: PoliticacookiespublicoComponent
      },
      {
        path: 'preguntaspublico',
        component: PreguntaspublicoComponent
      },
      {
        path: 'quienessomospublico',
        component: QuienessomospublicoComponent
      },
      {
        path: 'terminoscondicionespublico',
        component: TerminosycondicionespublicoComponent
      },


///
      {
        path: 'headeradmon',
        component: HeaderadmonComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },

      {
        path: 'footer',
        component: FooterComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'contacto',
        component: ContactoComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'servicios',
        component: ServiciosComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },

      {
        path: 'serviciospublico',
        component: ServiciospublicoComponent,   
      },
      {
        path: 'ubicacion',
        component: UbicacionComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },

      {
        path: 'crear-cuenta',
        component: CrearCuentaComponent
      },



      {
        path: 'recuperar-password',
        component: RecuperarPasswordComponent
      },
      {
        path: 'quienessomos',
        component: QuienessomosComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'agendar',
        component: AgendarComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'avisoprivacidad', component: AvisoPrivacidadComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: 'terminoscondiciones', component: TerminosCondicionesComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: 'politicacookies', component: PoliticaCookiesComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: 'preguntas', component: PreguntasComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: 'perfil', component: PerfilComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: 'editarperfil', component: EditarPerfilComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: 'historial', component: HistorialComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: '',
        component: E404Component
      },
      {
        path: '**',
        component: E404Component

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
