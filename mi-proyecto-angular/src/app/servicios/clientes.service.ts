import { Injectable } from '@angular/core';

/* ---------    */
/* USE FACTORY */
/* ---------    */
export class ClientesServiceUseFactory {

  private clientes: string[] = [
    'Juan-useFactory',
    'Ana-useFactory',
    'Pedro-useFactory',
    'Maria-useFactory',
    'Pablo-useFactory'
  ]

  constructor() { }

  getClientes() {
    return this.clientes
  }

  agregarCliente(client) {
    this.clientes.unshift(client)
  }

  borrarCliente() {
    this.clientes.shift()
  }
}

export function functionClientesServiceUseFactory() {
  console.log('AQUI EJECUTO INICIALIZACIONES PREVIAS A LA PUESTA EN MARCHA DEL SERVICIO');

  return new ClientesServiceUseFactory();
}

/* ---------    */
/* USE EXISTING */
/* ---------    */
@Injectable({
  providedIn: 'root'
})
export class ClientesServiceUseExisting {

  private clientes: string[] = [
    'Juan-useExisting',
    'Ana-useExisting',
    'Pedro-useExisting',
    'Maria-useExisting',
    'Pablo-useExisting'
  ]

  constructor() { }

  getClientes() {
    return this.clientes
  }

  agregarCliente(client) {
    this.clientes.unshift(client)
  }

  borrarCliente() {
    this.clientes.shift()
  }
}


/* --------- */
/* USE CLASS */
/* --------- */
export class ClientesServiceUseClass {

  private clientes: string[] = [
    'Juan-useClass',
    'Ana-useClass',
    'Pedro-useClass',
    'Maria-useClass',
    'Pablo-useClass'
  ]

  constructor() { }

  getClientes() {
    return this.clientes
  }

  agregarCliente(client) {
    this.clientes.push(client)
  }

  borrarCliente() {
    this.clientes.pop()
  }
}

/* --------- */
/*  ORIGINAL */
/* --------- */
@Injectable(/* {
  providedIn: 'root'
} */)
export class ClientesService {

  private clientes: string[] = [
    'Juan',
    'Ana',
    'Pedro',
    'Maria',
    'Pablo'
  ]

  constructor() { }

  getClientes() {
    return this.clientes
  }

  agregarCliente(client) {
    this.clientes.push(client)
  }

  borrarCliente() {
    this.clientes.pop()
  }

}
