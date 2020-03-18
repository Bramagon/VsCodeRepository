import { TetrisComponent } from './components/pages/tetris/tetris.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/pages/about/about.component';
import { GridComponent } from './components/game-parts/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserItemComponent,
    HeaderComponent,
    AddUserComponent,
    AboutComponent,
    TetrisComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
