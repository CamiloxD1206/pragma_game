import { Component } from '@angular/core';
import { ButtonComponent } from '../atoms/button/button.component';
import { InputComponent } from '../atoms/input/input.component';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [ButtonComponent,InputComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {

}
