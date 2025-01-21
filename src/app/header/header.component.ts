import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fixed this
})
export class HeaderComponent {

  userInput: string = '';
  josh:string = ''
  bro:string = 'BROOO'

}
