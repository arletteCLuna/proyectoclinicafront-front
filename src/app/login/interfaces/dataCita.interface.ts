// dataCita.interface.ts
export interface DataCita {
  fecha: string;
  hora: string;
  motivo: string;
  dentista: string;
  usuario?: {
    id_usuario: number;
    nombre: string;
    apellidop: string;
    apellidom: string;
};}
