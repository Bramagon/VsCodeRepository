import { UserService } from 'src/app/services/UserService';
import { User } from 'src/app/Models/User';
import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/ThemeService';
import { Option, Preferences } from '../../../Models/preferences';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();
  preference$: Observable<Preferences>;
  previous: Preferences;
  constructor(private readonly themeService: ThemeService) {}

  ngOnInit() {
    if(localStorage.getItem('token') == null) {
    this.themeService.setTheme("deeppurple-amber");
    }
    this.preference$ = this.themeService.getPreferences();

  }

  setUserTheme(pref: Preferences){
    if(pref != this.previous) {
      this.themeService.setTheme(pref.theme);
      this.previous = pref;
    }
  }

  themeChangeHandler(themeToSet) {
    this.themeService.setTheme(themeToSet);
  }
}
