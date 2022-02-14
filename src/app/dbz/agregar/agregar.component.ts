import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje = {
    nombre: '',
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    if (this.nuevo.poder === undefined) {
      this.nuevo.poder = 0;
    }

    this.onNuevoPersonaje.emit(this.nuevo);
  }

}
