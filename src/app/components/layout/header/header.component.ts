import { UserService } from 'src/app/services/UserService';
import { User } from 'src/app/Models/User';
import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/ThemeService';
import { Option } from '../../../Models/preferences';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.setTheme("deeppurple-amber");
  }

  themeChangeHandler(themeToSet) {
    this.themeService.setTheme(themeToSet);
  }
}
