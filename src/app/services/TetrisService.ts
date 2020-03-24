import { ROWS } from './../constants';
import { Piece, IPiece } from 'src/app/Models/Piece';
import { COLS } from '../constants';


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

valid(p: IPiece): boolean {
  return p.shape.every((row, dy) => {
    return row.every((value, dx) => {
      let x = p.x + dx;
      let y = p.y + dy;
      return (
        this.isEmpty(value) ||
       (this.insideWalls(x) &&
        this.aboveFloor(y)
      ));
   });
});




}





}
