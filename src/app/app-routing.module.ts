import { TetrisComponent } from './components/pages/tetris/tetris.component';
import { AboutComponent } from './components/pages/about/about.component';
import { UserComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Tetris', component: TetrisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
