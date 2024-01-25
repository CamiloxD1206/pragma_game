import { Component } from '@angular/core';
import { CardComponent } from '../atoms/card/card.component';
import { ButtonComponent } from '../atoms/button/button.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CardComponent,ButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

}
