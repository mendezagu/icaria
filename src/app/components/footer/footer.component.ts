import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgbDropdownModule, MatIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  isMenuOpened: boolean = false;

  idiomas = [
    //{ id: 0, name: 'English', image: '../../../assets/img/english.svg' },
    { id: 1, name: 'Spanish', image: 'path/to/spanish-image.jpg' },
    { id: 2, name: 'German', image: 'path/to/german-image.jpg' },
    { id: 3, name: 'Japanese', image: 'path/to/japanese-image.jpg' },
    { id: 4, name: 'French', image: 'path/to/french-image.jpg' }
  ];

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
