import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  last: string = '';

  borrarHeroe(i: number) {
    this.last = this.heroes.pop() || '';
  }
}
