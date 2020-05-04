import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


export interface IUsuario {
  nombre: string,
  foto: string,
  descripcion: string,
  coordenadas: string,
  comentarios: string
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string = 'https://5e820163c130270016a37a10.mockapi.io/usuarios'; //url traida de mockapi.io
  
  constructor(private http: HttpClient) { }

  // OPCIONES HTTP (INCLUYENDO HEADERS)
  getHttpOptions() {
    //HTTP options
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
  }

  // MANEJO DE ERRORES DE HTTP CLIENT
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Error de Front End', error.error.message);
    } else {
      console.log(`Error de Back End: ${error.status}, cuerpo de error: ${error.message}`);
    }
    return throwError('Error de comunicacion');
  }

  // GET SERVICIO
  getUsuarios() {
    return this.http.get<IUsuario[]>(this.url).pipe(
      catchError(this.handleError)
    );
  }

  // POST SERVICIO
  postUsuario(usuario: IUsuario) {
    return this.http.post<IUsuario>(this.url, usuario, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // PUT SERVICIO
  putUsuario(id, usuario: IUsuario) {
    return this.http.put<IUsuario>(this.url+id, usuario, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // DELETE SERVICIO
  deleteUsuario(id) {
    return this.http.delete<IUsuario>(this.url+id).pipe(
      catchError(this.handleError)
    );
  }
}
