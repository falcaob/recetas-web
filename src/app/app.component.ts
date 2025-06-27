import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecetasComponent } from "./componentes/recetas/recetas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecetasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecetaObjetos';
}
