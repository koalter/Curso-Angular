import { Component, OnInit } from '@angular/core';
import { UsuariosService, IUsuario } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: IUsuario[] = [];
  
  constructor(private usuariosService: UsuariosService) { }

  formatFecha(fecha: string) {
    return new Date(fecha).toLocaleString();
  }

  ngOnInit(): void {
    // this.obtenerUsuarios();
  }

  // GET
  obtenerUsuarios() {
    this.usuariosService.getUsuarios()
    .subscribe( (usuarios: IUsuario[]) => {
      console.log(usuarios);
      this.usuarios = usuarios;
    });
  }

  // POST
  enviarUsuario() {
    let nuevoUsuario: IUsuario = {
      nombre: 'Daniel',
      foto: '',
      descripcion: 'una descripcion',
      coordenadas: '123456',
      comentarios: 'un comentario'
    };

    this.usuariosService.postUsuario(nuevoUsuario)
    .subscribe( (usuario: IUsuario) => {
      console.log(usuario);
      this.obtenerUsuarios();
    });
  }

  // DELETE
  eliminarUsuario(id) {
    this.usuariosService.deleteUsuario(id)
    .subscribe( (usuario: IUsuario) => {
      console.log(usuario);
      this.obtenerUsuarios();
    });
  }

  // PUT
  actualizarUsuario(id) {
    let nuevoUsuario: IUsuario = {
      nombre: 'Angel',
      foto: '',
      descripcion: 'otra descripcion',
      coordenadas: '123456',
      comentarios: 'otro comentario'
    };
    
    this.usuariosService.putUsuario(id, nuevoUsuario)
    .subscribe( (usuario: IUsuario) => {
      console.log(usuario);
      this.obtenerUsuarios();
    })
  }

}
