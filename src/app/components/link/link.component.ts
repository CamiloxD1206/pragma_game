import { Component } from '@angular/core';

import { SecondarybuttonComponent } from '../atoms/secondarybutton/secondarybutton.component';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [SecondarybuttonComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {

}
