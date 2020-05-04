import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})
export class EstructuraComponent implements OnInit {

  mostrar : boolean = true;
  personas : string[] = ['Juan', 'Miguel', 'Guille', 'Carlos'];
  personas2 : Array<string> = ['Ana', 'Maria', 'Susana', 'Agus'];
  alumnos : Array<object> = [
    {
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 23,
      curso: false,
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-512.png'
    },
    {
      nombre: 'Mario',
      apellido: 'Mario',
      edad: 30,
      curso: true,
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png'
    },
    {
      nombre: 'Luigi',
      apellido: 'Mario',
      edad: 25,
      curso: true,
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png'
    },
    {
      nombre: 'Pepe',
      apellido: 'Piñeira',
      edad: 28,
      curso: false,
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-512.png'
    }
  ];

  constructor(private clientesService: ClientesService) { 
    this.personas = clientesService.getClientes();
  }

  ngOnInit(): void {
  }

  borrarCliente() {
    this.clientesService.borrarCliente();
  }

  eliminar(index): void {
    this.alumnos.splice(index, 1);
  }

  agregar(): void {
    let alumno = {
      nombre: 'Julieta',
      apellido: 'Cazzuchelli',
      edad: 22,
      curso: false,
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png'
    };

    this.alumnos.push(alumno);
  }
}
