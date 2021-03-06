import { User } from 'src/app/Models/User';
import { GridComponent } from './components/game-parts/grid/grid.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
}
