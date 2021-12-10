import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[]=['Ironman', 'Hulk', 'Spiderman', 'Thor'];
  heroeBorrado='';

  borrarHeroe(){
    this.heroeBorrado=this.heroes.shift() || '';
  }

}
