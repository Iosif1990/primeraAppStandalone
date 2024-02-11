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
}