import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email, Password, Response, User, responseValid } from '../interfaces/user.interface';
import { RespuestaLogin } from '../interfaces/respuestalogin.interface';
import { DatosEnviados } from '../interfaces/datosenviados.interface';
import { CreateCita } from '../interfaces/createCita.interface';
import { DataUser } from '../interfaces/dataUser.interface';
import { UpdateUser } from '../interfaces/updateUser.interface';
import { DataCita } from '../interfaces/dataCita.interface';
import { DataInformacion } from '../interfaces/dataInformacion.interface';
import { DataPreguntas } from '../interfaces/dataPreguntas.interface';
import { UpdateInformacion } from '../interfaces/updateInformacion.interface';
import { UpdatePreguntas } from '../interfaces/updatePreguntas.interface';
import { CreatePreguntas } from '../interfaces/createPreguntas.interface';
import { CreateServicio } from '../interfaces/createServicio.interface';
import { DataServicio } from '../interfaces/dataServicio.interface';
import { Observable } from 'rxjs';
import { DataContacto } from '../interfaces/dataContacto.interface';
import { CreateContacto } from '../interfaces/createContacto.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  url:string = 'http://localhost:3000/'
  //url:string = 'https://proyectoclinicaback-back-production.up.railway.app/'

  //usuario
  getUserByEmail(emai:string){
    return this.http.get<User>(this.url + 'auth/'+emai)
  }
  crearUsuario(userNew:User){
    return this.http.post<User>(this.url + 'auth', userNew)
  }
  cambiarPassword(newPassword:Password,email:string){
    return this.http.patch<User>(this.url + 'auth/password/'+email, newPassword)
  }

  //Cambiar contrasena
  checkEmail(dataEmail:{email:string}){
    return this.http.post<responseValid>(this.url + 'recuperar-pass',dataEmail)
  }
  checkRespuesta(dataRespuesta:{email:string,respuesta:string}){
    return this.http.post<{status:number,message:string}>(this.url +'recuperar-pass/check-respuesta',dataRespuesta)
  }
  getPregunta(dataEmail:{email:string}){
    return this.http.post<{status:number,question:string}>(this.url + 'recuperar-pass/check-question',dataEmail);
  }
  sendCode(email:Email){
    return this.http.post<Response>(this.url + 'email',email)
  }

  validarUsuario(datos:DatosEnviados){
    return this.http.post<RespuestaLogin>(this.url + 'login',datos)
  }

  //citas
  addCita(data:CreateCita,id:string){
    return this.http.post<{message:string,status:number}>(this.url + 'auth/citas/'+id,data)
  }
  getAllCitasByUserId(id: string) {
  return this.http.get<DataCita[]>(this.url + 'auth/user/' + id + '/citas');
  }
  getCita() {
  return this.http.get<DataCita[]>(this.url + 'auth/cita/'+1);
  }



  getDataUser(id:string){
    return this.http.get<DataUser>(this.url + 'auth/user/'+id)
  }


  updateUser(id:string,data:UpdateUser){
    return this.http.patch<UpdateUser>(this.url + 'auth/perfil/'+parseInt(id),data)
  }
///////
//get informacion
getDataInformacion(id:string){
  return this.http.get<DataInformacion>(this.url + 'auth/informacion/'+1);
}
updateInformacion(id: string, data: any): Observable<any> {
  return this.http.patch<any>(this.url + 'auth/informacion/' + 1, data);
}



// get de preguntas y respuestas
getPreguntas() {
  return this.http.get<DataPreguntas[]>(this.url + 'auth/preguntas/'+1);
}
 updatePreguntas(id: string, data: UpdatePreguntas): Observable<any> {
    return this.http.patch<any>(this.url + 'auth/preguntas/' + id, data);
  }

  deletePregunta(id: string): Observable<any> {
    return this.http.delete<any>(this.url + 'auth/preguntas/' + id);
  }

  createPreguntas(createPreguntasDto: CreatePreguntas): Observable<any> {
    return this.http.post<any>(this.url + 'auth/preguntas/', createPreguntasDto);
  }

  getAuth() {
    return this.http.get<DataUser[]>(this.url + 'auth/');
  }

  deleteUser(email: string) {
    return this.http.delete<any>(this.url + 'auth/user/' + email); // Utiliza template literals para incluir el email en la URL
  }


  getIp(){
    return this.http.get<{ip:string}>('https://api.ipify.org/?format=json');
  }


  // Servicios

  getServicios() {
    return this.http.get<DataServicio[]>(this.url + 'auth/servicios/'+1);
  }

  createServicio(createServicioDto: any): Observable<any> {
    return this.http.post<any>(this.url + 'auth/servicios', createServicioDto);
  }

  findOneServicio(id: number): Observable<DataServicio> {
    return this.http.get<DataServicio>(this.url + 'auth/servicios/' + id);
  }

  updateServicio(id: number, updateServicioDto: CreateServicio): Observable<any> {
    return this.http.patch<any>(this.url + 'auth/servicios/' + id, updateServicioDto);
  }

  removeServicio(id: number): Observable<any> {
    return this.http.delete<any>(this.url + 'auth/servicios/' + id);
  }

// get de Contacto
getContacto() {
  return this.http.get<DataContacto[]>(this.url + 'auth/contacto/'+1);
}

  deleteContacto(id: string): Observable<any> {
    return this.http.delete<any>(this.url + 'auth/contacto/' + id);
  }

  createContacto(createContactoDto: CreateContacto): Observable<any> {
    return this.http.post<any>(this.url + 'auth/contacto/', createContactoDto);
  }


}
