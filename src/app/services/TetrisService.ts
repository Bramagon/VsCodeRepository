import { ROWS } from './../constants';
import { Piece, IPiece } from '../../app/Models/Piece';
import { COLS } from '../constants';
import { GridComponent } from '../components/game-parts/grid/grid.component';


export class TetrisService {

  constructor() { }

isEmpty(val: number) {
  if (val > 0) { return false; } else { return true; }
}

insideWalls(x: number) {
  if (x < COLS && x >= 0) { return true; } else { return false; }
}

aboveFloor(y: number) {
  if (y < ROWS && y >= 0) { return true; } else { return false; }
}

valid(p: IPiece, board: number[][]): boolean {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return (
          this.isEmpty(value) ||
        (this.insideWalls(x) &&
          this.aboveFloor(y) && board[y][x] === 0
        ));
    });
  });
}

rotate(p: IPiece, board: number[][]) {
  let clone: IPiece = JSON.parse(JSON.stringify(p));

  for (let y = 0; y < clone.shape.length; y++) {
    for (let x = 0; x < y; x++) {
      [clone.shape[x][y], clone.shape[y][x]] =
      [clone.shape[y][x], clone.shape[x][y]];
    }
  }
  clone.shape.forEach(row => row.reverse());
  if (this.valid(clone, board)) {
    for (let y = 0; y < p.shape.length; y++) {
      for (let x = 0; x < y; x++) {
        [p.shape[x][y], p.shape[y][x]] =
        [p.shape[y][x], p.shape[x][y]];
      }
    }
    p.shape.forEach(row => row.reverse());
  }
  return p;

}

randomizeTetromino(amountOfTypes: number): number {
  return Math.floor(Math.random() * amountOfTypes);
}

}
