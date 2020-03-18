import { GridComponent } from './../../game-parts/grid/grid.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tetris',
  template: '<app-grid></app-grid>',
  styles: ['canvas { border-style: solid }']
})
export class TetrisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
