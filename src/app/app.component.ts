import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ContadorComponent, NoticiasComponent],
    templateUrl:'./app.component.html',
    styleUrls: ['./app.component.css'],
  })
  
export class AppComponent {
  title = 'primeraAppStandalone';
}


