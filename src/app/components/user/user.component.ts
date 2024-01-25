import { Component } from '@angular/core';
import { ButtonComponent } from '../atoms/button/button.component';
import { InputComponent } from '../atoms/input/input.component';
import { RadiobuttonsComponent } from '../atoms/radiobuttons/radiobuttons.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ButtonComponent,InputComponent,RadiobuttonsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {



}
