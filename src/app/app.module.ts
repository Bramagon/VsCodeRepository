import { TokenInterceptor } from './services/TokenInterceptor';
import { LoginComponent } from './components/login-user/login/login.component';
import { TetrisComponent } from './components/pages/tetris/tetris.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/pages/about/about.component';
import { GridComponent } from './components/game-parts/grid/grid.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

import { ThemeService } from './services/ThemeService';
import { StyleManagerService } from './services/StyleManager';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    UserItemComponent,
    AddUserComponent,
    AboutComponent,
    TetrisComponent,
    GridComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    JwtHelperService,
    UserItemComponent,
    ThemeService,
    StyleManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
