import { Component, EventEmitter, Output } from '@angular/core';
import { Receta } from '../../../interfaces/receta';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  receta: Receta = {
    id: 0,
    nombre: '',
    descripcion: '',
    image: '',
  };

  recetas: Receta[] = [
    {
      id: 1,
      nombre: 'Tataki de atún',
      descripcion: 'Receta de atún medio crudo',
      image: 'tataki.jpg',
    },

    {
      id: 2,
      nombre: 'Potaje con garbanzos',
      descripcion: 'Receta de toda la vida',
      image: 'potaje.jpg',
    },

    {
      id: 3,
      nombre: 'Tarta enrejada de manzanas',
      descripcion: 'Tarta con hojaldre',
      image: 'tarta.jpg',
    },

    {
      id: 4,
      nombre: 'Lasaña con espinacas',
      descripcion: 'Pasta fina con verdura verde',
      image: 'tataki.jpg',
    },
  ];

  // Evento para envío al padre
  @Output() mensajeEvento = new EventEmitter<Receta>();

  // Método para el envío anterior
  enviarReceta(value: Receta) {
    // le emitimos al padre el objeto que es el parámetro que recibe
    this.mensajeEvento.emit(value);
  }

  // Formulario
  verFormulario = false;

  mostrarFormulario() {
    this.verFormulario = !this.verFormulario;
    // Para que el id se ordene
    this.receta.id = this.recetas.length + 1;
  }

  borrar(dato: number) {
    for (let x = 0; x < this.recetas.length; x++) {
      // Comparamos el id para borrar con el parámetro de la función
      if (dato == this.recetas[x].id) {
        this.recetas.splice(x, 1);
        this.actualizarListado();
        this.verFormulario = false;
        return;
      }
    }
  }

  actualizarListado() {
    // Ordenar ids cuando se elimina
    for (let x = 0; x < this.recetas.length; x++) {
      this.recetas[x].id = x + 1;
    }
  }

  // Método para agregar 1º recorrer y 2º comparar codigo con el objeto para ver si existe
  agregar() {
    for (let x = 0; x < this.recetas.length; x++) {
      if (this.receta.id == this.recetas[x].id) {
        alert('El id de la receta ya existe');
        return;
      }
    }

    this.recetas.push({
      id: this.receta.id,
      nombre: this.receta.nombre,
      descripcion: this.receta.descripcion,
      image: this.receta.image,
    });

    // Inicializamos para que no se guarden los datos
    this.receta.nombre = '';
    this.receta.descripcion = '';
    this.receta.image = '';

    this.mostrarFormulario();
  }

  seleccionar(receta: Receta) {
    this.mostrarFormulario();
    this.receta.id = receta.id;
    this.receta.nombre = receta.nombre;
    this.receta.descripcion = receta.descripcion;
    this.receta.image = receta.image;
  }

  modificar() {
    for (let x = 0; x < this.recetas.length; x++) {
      if (this.recetas[x].id == this.receta.id) {
        this.recetas[x].nombre = this.receta.nombre;
        this.recetas[x].descripcion = this.receta.descripcion;
        this.recetas[x].image = this.receta.image;

        this.mostrarFormulario();

        this.receta.nombre = '';
        this.receta.descripcion = '';
        this.receta.image = '';

        return;
      }
    }
  }
}
