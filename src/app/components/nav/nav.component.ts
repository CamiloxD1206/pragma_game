import { Component } from '@angular/core';
import { SecondarybuttonComponent } from '../atoms/secondarybutton/secondarybutton.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [SecondarybuttonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
