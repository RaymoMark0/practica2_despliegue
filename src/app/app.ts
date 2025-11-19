import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calendario } from './calendario/calendario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calendario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica_final_despliegue');
}
