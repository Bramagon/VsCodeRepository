import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Option } from "../Models/preferences";
import { StyleManagerService } from './StyleManager';


@Injectable()
export class ThemeService {
  userUrl: string = 'https://localhost:5001/api/Preferences';
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Observable<Array<Option>> {
    return this.http.get<Array<Option>>("../assets/options.json");
  }

  getPreferences(): Observable<Option> {
    return this.http.get<Option>("https://localhost:5001/api/Preferences");
  }

  setTheme(themeToSet) {


    if (localStorage.getItem('token') == null) {
        this.styleManager.setStyle(
            "theme",
            "../assets/options.json" + themeToSet + ".css"
        );
    }
    else {


    }
  }
}