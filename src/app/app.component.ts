import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/main.scss'],
// L'encapsulaation permet de définir cette feuille de style comme style de ref pour le projet
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'NovaGame';
}
