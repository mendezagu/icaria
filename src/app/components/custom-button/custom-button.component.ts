import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {

  @Input() title!: string;
  @Input() icon!: string;
  @Input() img!: string;
  @Input() size!: string;
}
