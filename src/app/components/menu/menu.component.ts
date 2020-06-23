import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { Option, Preferences } from "../../Models/preferences";
import { ThemeService } from "../../services/ThemeService";
import { Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit{
  @Input() options: Array<Option>;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();


  constructor(private themeService: ThemeService) {
  }
  preference: Preferences; 


  ngOnInit() {
    this.themeService.getPreferences().subscribe(p => this.preference = p);
    if (this.preference == null) {
      this.themeService.setTheme("deeppurple-amber");
    }
    
  }

  changeTheme(themeToSet) {
    this.themeChange.emit(themeToSet);
    
    if (localStorage.getItem('token') != null) {
      const newpref: Preferences = new Preferences();

      if (this.preference != null){
        newpref.theme = themeToSet;
        this.themeService.updatePreferences(newpref).subscribe();
      } else {
        newpref.theme = themeToSet;
        this.themeService.savePreferences(newpref).subscribe(p => this.preference = p);
      }
    }
  }
}
