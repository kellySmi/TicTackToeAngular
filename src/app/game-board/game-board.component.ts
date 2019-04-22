import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { GameService } from '../game.service';

const squares = Array(9).fill(null);
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  status = 'Next player: X';
  squares: string[] = Array(9);
  xIsNext: boolean = false; 
  constructor(private gameService: GameService) { }
  ngOnInit() {
    this.squares.fill("");
  }
  handleClick(location: number) {
    this.squares[location] = this.xIsNext ? 'O':'X'; //assign player to square location
    let winnerCheck = this.gameService.calculateWinner(this.squares);
    if (winnerCheck) { // check for winner
       this.status = winnerCheck+" has won!";
    }else{
      this.status = this.xIsNext ? 'Next player: X' : 'Next player: O';
      this.xIsNext =  !this.xIsNext;
    }
  }
}
