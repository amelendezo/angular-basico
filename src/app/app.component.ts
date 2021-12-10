import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //<--este es el nombre que va a tener el componente
  //se identifica el html que va hacer usado, como componente, para mostrar su contenido, como esta en el mismo directorio
  //en el mismo nivel lo podemos especificar asi, si esta en otro directorio lo especificamos el path ../app.componente.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
