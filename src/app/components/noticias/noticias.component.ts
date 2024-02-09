import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  arrNoticias: any[] = [{}]
  newNoticias: any = {
    'titulo': "",
    'imagen': "",
    'texto': "",
    'fecha': "",
  }
  guardar(){
    this.arrNoticias.push(this.newNoticias);
    console.log(this.arrNoticias);
    this.newNoticias = {
      'titulo': "",
      'imagen': "",
      'texto': "",
      'fecha': "",
  };
    console.log(this.arrNoticias)
  }

  cargarDatos() : string {
    let html : string = "";
    this.arrNoticias.forEach((element: any) => {
      html += `<p>${element.titulo} - ${element.imagen} - ${element.texto} - ${element.fecha}</p>`;
  });
      return html
  }
}