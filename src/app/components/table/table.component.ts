import { Component } from '@angular/core';
import { CardComponent } from '../atoms/card/card.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

}
