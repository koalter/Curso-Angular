import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  mensaje : string = 'Soy un mensaje!'
  valor1 : number = 234
  valor2 : number = 345
  contador : number = 0
  valor3 : number = 456
  valor4 : number = 567

  constructor() { }

  ngOnInit(): void {
  }

  modificar(e) {
    let dato = e.target.value
    this.valor3 = dato
  }

}
