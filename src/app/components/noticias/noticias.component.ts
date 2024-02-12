import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [FormsModule],
  templateUrl:'./noticias.component.html',
  styleUrls: ['./noticias.component.css'],
})
export class NoticiasComponent {
  color: string = 'violeta'
  
  arrNoticias: any[] = [];
  
  newNoticia: any = {
  'titulo':"",
  'imagen':"",
  'texto':"",
  'fecha':"",
}

guardar(){
  this.arrNoticias.push(this.newNoticia);
  console.log(this.arrNoticias)
  this.newNoticia = {
    'titulo':"",
    'imagen':"",
    'texto':"",
    'fecha':"",
  }
}

cargarDatos() : string {
    let html = "";
    this.arrNoticias.forEach(element => {html += `<p>${element.titulo} - ${element.imagen} - ${element.texto} - ${element.fecha}</p>`      
    }); 
    return html 
}
}