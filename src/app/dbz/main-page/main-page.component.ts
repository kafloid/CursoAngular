import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: '',
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    if (this.nuevo.poder === undefined) {
      this.nuevo.poder = 0;
    }

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
    }
  }
}
