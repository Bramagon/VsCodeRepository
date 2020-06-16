import { HomeComponent } from '../src/app/components/home/home.component';
import { TetrisComponent } from '../src/app/components/pages/tetris/tetris.component';
import { AboutComponent } from '../src/app/components/pages/about/about.component';
import { UserComponent } from '../src/app/components/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Tetris', component: TetrisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
