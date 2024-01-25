import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RoomComponent } from './components/room/room.component';
import { CardsComponent } from './components/cards/cards.component';
import { LinkComponent } from './components/link/link.component';
import { TableComponent } from './components/table/table.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,UserComponent,RoomComponent,CardsComponent,LinkComponent,TableComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pragma';
}
