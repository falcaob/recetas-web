import { Component, Input } from '@angular/core';
import { Receta } from '../../../interfaces/receta';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  // Recibimos receta y le indicamos que puede ser null
  // lo que indica que podemos recuperar los objetos
  @Input() valor: Receta | null = null;

}
