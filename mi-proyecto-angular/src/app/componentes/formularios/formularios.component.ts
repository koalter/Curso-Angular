import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VerificarEspacios } from 'src/app/validaciones/espacios.validator';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formu = {
    nombre: '',
    apellido: '',
    edad: '',
    email: '',
    password: ''
  };

  f: FormGroup

  constructor(private fb: FormBuilder) {
    this.f = fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6),
        VerificarEspacios
      ])], //al usar arrays, el primer elemento es el valor, el segundo un validador
      apellido: '',
      edad: '',
      contacto: fb.group({
        email: '',
        direccion: ''
      }),
      password: ''
    });
  }

  ngOnInit(): void {
  }

  enviar(): void {
    console.log(this.formu);
    this.formu = {
      nombre: '',
      apellido: '',
      edad: '',
      email: '',
      password: ''
    };
  }

  enviar2(): void {
    console.log(this.f.value);
    this.f.reset();
  }
}
