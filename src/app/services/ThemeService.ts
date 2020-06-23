import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Option, Preferences } from "../Models/preferences";
import { StyleManagerService } from './StyleManager';
import { share, map } from 'rxjs/operators';
import { apiUrl } from 'src/config/config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class ThemeService {
  prefUrl: string = `${apiUrl}/Prefs`;
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  

  getThemeOptions(): Observable<Array<Option>> {
    return this.http.get<Array<Option>>("../assets/options.json");
  }

  savePreferences(preferences: Preferences): Observable<Preferences> {
    
    return this.http.post<Preferences>(this.prefUrl, preferences, httpOptions)
    .pipe(share(), map(res => res));
  }

  updatePreferences(preferences: Preferences): Observable<Preferences> {
    return this.http.put<Preferences>(this.prefUrl, preferences, httpOptions)
    .pipe(share(), map(res => res));
  }


  getPreferences(): Observable<Preferences> {
    return this.http.get<Preferences>(this.prefUrl, httpOptions);
  }

  setTheme(themeToSet) {
    this.styleManager.setStyle(
      "theme",
      `../../../assets/material/${themeToSet}.css`
    );
  }
}