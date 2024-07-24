
export interface User {
  id_usuario: number;
  nombre:     string;
  email:      string;
  apellidop:  string;
  apellidom:  string;
  sexo:       string;
  fecha:      null;
  nombreu:    string;
  contrasena: string;
  telefono: number;
}

export interface Email{
  to: string;
}

export interface Response{
  codigo:string
  message:string
  status:number
  id:number
}

export interface Password{
  contrasena:string
  ip:string
  fecha:string
}

export interface responseValid{
  status:number;
  message:string;
}
