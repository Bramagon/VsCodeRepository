import { TetrisService } from './../../../services/TetrisService';
import { IPiece } from './../../../Models/Piece';
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { COLS, BLOCK_SIZE, ROWS, KEY } from './../../../constants';
import { Piece } from 'src/app/Models/Piece';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @ViewChild('board', { static: true} )
  canvas: ElementRef<HTMLCanvasElement>;
  grid: number[][];
  ctx: CanvasRenderingContext2D;
  piece: Piece;
  points: number;
  lines: number;
  level: number;
  service: TetrisService = new TetrisService();
    moves = {
      [KEY.LEFT]: (p: IPiece): IPiece => ({...p, x: p.x - 1}),
      [KEY.RIGHT]: (p: IPiece): IPiece => ({ ...p, x: p.x + 1 }),
      [KEY.UP]: (p: IPiece): IPiece => ({ ...p, y: p.y - 1 }),
      [KEY.DOWN]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 })
    };

  ngOnInit(): void {
    this.initGrid();
  }

  initGrid() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
  }

  getEmptyBoard(): number[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  play() {
    this.grid = this.getEmptyBoard();
    this.piece = new Piece(this.ctx);
    this.piece.draw();
    console.table(this.grid);

  }

  @HostListener('window:keydown', ['$event'])
  keyevent(event: KeyboardEvent) {
    if (this.moves[event.keyCode]) {
      event.preventDefault();
      const p = this.moves[event.keyCode](this.piece);
      if (this.service.valid(p)) {
        this.piece.move(p);
      }
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.piece.draw();
      console.log(this.piece.x, this.piece.y);
    }
  }


}
