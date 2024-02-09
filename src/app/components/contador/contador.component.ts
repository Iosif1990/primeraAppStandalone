import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
numero: number = 0;
intervalo: any;
name: string = 'Manuel';
surname: string = 'Lopez';
color: string = 'rojo';
texto: string = "";



getName() : string{
  return this.name + " " + this.surname;
}

cargarTexto(ev: any): void {
  this.texto = ev.target.value
}
}