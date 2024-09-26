import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonajesComponent } from "./personajes/personajes.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonajesComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'The Dragon Ball API';
}
