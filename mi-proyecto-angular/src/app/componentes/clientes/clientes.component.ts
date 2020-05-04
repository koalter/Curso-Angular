import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: string[] = [];
  client: string = '';
  id: string;
  
  constructor(private clientesService: ClientesService, activatedRoute: ActivatedRoute) { 
    this.clientes = clientesService.getClientes();
    console.log('constructor ClientesComponent');

    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit ClientesComponent');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy ClientesComponent');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck ClientesComponent');
  }

  agregarCliente(cliente) {
    this.clientesService.agregarCliente(cliente);
  }
}
