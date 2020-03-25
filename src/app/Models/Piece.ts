import { BLOCK_SIZE, SHAPES, COLORS } from '../constants';

export interface IPiece {
  x: number;
  y: number;
  color: string;
  shape: number[][];
}

export class Piece implements IPiece {
  x: number;
  y: number;
  color: string;
  shape: number[][];

  constructor(private ctx: CanvasRenderingContext2D, typeId: number) {
    this.spawn(typeId);
  }

  spawn(typeId: number) {
    this.color = COLORS[typeId];
    this.shape = SHAPES[typeId];

    this.x = 3;
    this.y = 0;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  move(p: IPiece) {
    this.x = p.x;
    this.y = p.y;
  }
}
