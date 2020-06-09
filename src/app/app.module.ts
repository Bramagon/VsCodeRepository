import { TokenInterceptor } from './services/TokenInterceptor';
import { UserService } from './services/user.service';
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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserItemComponent,
    HeaderComponent,
    AddUserComponent,
    AboutComponent,
    TetrisComponent,
    GridComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
