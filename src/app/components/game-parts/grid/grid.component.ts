import { Points, Level } from './../../../Models/Points';
import { TetrisService } from './../../../services/TetrisService';
import { IPiece } from './../../../Models/Piece';
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { COLS, BLOCK_SIZE, ROWS, KEY, COLORS, SHAPES } from './../../../constants';
import { Piece } from '../../../Models/Piece';
import { Key } from 'protractor';
import { Scoreboard } from 'src/app/Models/Scoreboard';
import { UserService } from 'src/app/services/UserService';
import { User } from 'src/app/Models/User';
import { ScoreService } from 'src/app/services/ScoreService';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @ViewChild('board', { static: true} )
  canvas: ElementRef<HTMLCanvasElement>;
  user: User;
  grid: number[][];
  ctx: CanvasRenderingContext2D;
  piece: Piece;
  alive: boolean;
  score: Scoreboard = new Scoreboard();
  service: TetrisService = new TetrisService();
  time = { start: 0, elapsed: 0, level: 1000 };
  moves = {
    [KEY.LEFT]: (p: IPiece): IPiece => ({...p, x: p.x - 1}),
    [KEY.RIGHT]: (p: IPiece): IPiece => ({ ...p, x: p.x + 1 }),
    [KEY.UP]: (p: IPiece): IPiece => this.service.rotate(p, this.grid),
    [KEY.SPACE]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 })
  };
  private subscription: Subscription;
  constructor(private userService: UserService, private scoreService: ScoreService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.subscription = this.userService.getUser().subscribe(u => this.user = u);
    }
    this.initGrid();
    this.resetGame();
  }

  animate(now = 0) {
    this.time.elapsed = now - this.time.start;
    if (this.time.elapsed > this.time.level) {
      this.time.start = now;
      this.drop();
    }
    this.draw();
    if (this.score.levelCount < 10 && this.score.linesCount / (10 * this.score.levelCount) >= 1) {
      this.score.levelCount += 1;
      this.setSpeed();
    }
    if (this.alive) {
    requestAnimationFrame(this.animate.bind(this));
    } else {
      this.gameOver();
      return;
    }
  }

  setSpeed( ) {
    this.time.level = Level[this.score.levelCount];
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.piece.draw();
    this.drawBoard();
  }

  drawBoard() {
    this.grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillStyle = COLORS[value - 1];
          this.ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }

  drop() {
    const p = this.moves[KEY.SPACE](this.piece);
    if (this.service.valid(p, this.grid)) {
        this.score.pointsCount += Points.SOFT_DROP;
        this.piece.move(p);
      } else {
        this.freeze();
      }
  }

  gameOver() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(1, 3, 8, 1.2);
    this.ctx.font = '1px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('GAME OVER', 1.8, 4);
    if (this.user != null) {
      console.log('updating score...');
      this.score.UserId = this.user.id;
      // todo: Post score for user
    }
  }

  saveScore() {
    this.scoreService.addScore(this.score);
  }

  freeze() {
    if (this.piece.y === 0) {
      this.alive = false;
    }
    this.piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.grid[y + this.piece.y][x + this.piece.x] = value;
        }
      });
    });

    this.clearlines();
    this.spawnPiece();
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

  spawnPiece() {
    const typeId = this.service.randomizeTetromino(SHAPES.length);
    this.piece = new Piece(this.ctx, typeId);
  }

  play() {
    this.resetGame();
    this.alive = true;
    this.grid = this.getEmptyBoard();
    this.spawnPiece();
    this.animate();
  }

  clearlines() {
  this.grid.forEach((row, y) => {
      if (row.every(value => value > 0)) {
        this.grid.splice(y, 1);
        this.grid.unshift(Array(COLS).fill(0));
        this.score.linesCount += 1;
      }
    });
  }

  resetGame() {
    this.score.pointsCount = 0;
    this.score.linesCount = 0;
    this.score.levelCount = 1;
    this.grid = this.getEmptyBoard();
    this.setSpeed();
  }

  ngOnDestroy() {
    if (this.subscription != null) { 
      this.subscription.unsubscribe();
    }
  }

  @HostListener('window:keydown', ['$event'])
  keyevent(event: KeyboardEvent) {
    if (this.alive) {
      if (this.moves[event.keyCode]) {
        event.preventDefault();
        const p = this.moves[event.keyCode](this.piece);

        if (event.key === ' ') {
          if (this.service.valid(p, this.grid)) {
            this.piece.move(p);
            this.score.pointsCount += Points.HARD_DROP;
          }
        } else if (this.service.valid(p, this.grid)) {
          this.piece.move(p);
          this.animate();
        }
      }
    }
  }
}
