import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  arrNoticias: any[] = [
    {
      titulo: 'Noticia 1',
      imagen: 'https://ejemplo.com/imagen1.jpg',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fecha: '2022-01-01'
    },
    {
      titulo: 'Noticia 2',
      imagen: 'https://ejemplo.com/imagen2.jpg',
      texto: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      fecha: '2022-01-02'
    }
  ];

  newNoticias: any = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: ''
  };

  guardar() {
    if (this.validarNoticia(this.newNoticias)) {
      this.arrNoticias.push(this.newNoticias);
      this.resetearFormulario();
    } else {
      alert('Por favor, complete todos los campos del formulario.');
    }
  }

  validarNoticia(noticia: any): boolean {
    return noticia.titulo && noticia.imagen && noticia.texto && noticia.fecha;
  }

  resetearFormulario() {
    this.newNoticias = {
      titulo: '',
      imagen: '',
      texto: '',
      fecha: ''
    };
  }
}

