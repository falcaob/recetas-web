import { Component } from '@angular/core';
import { ListaComponent } from "./lista/lista.component";
import { DetalleComponent } from "./detalle/detalle.component";
import { Receta } from '../../interfaces/receta';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [ListaComponent, DetalleComponent],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {

  receta: Receta = {
    id: 0,
    nombre: 'Selecciona una receta de la lista',
    descripcion: 'Podrás ver todos los detalles',
    image: 'logo1.jpg'
  }

  // Recibir lo que me emite lista
  recibirReceta(recetaRecibida: Receta) {
    this.receta = recetaRecibida;
  }

}
