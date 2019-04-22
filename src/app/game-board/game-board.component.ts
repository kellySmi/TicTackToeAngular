import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  status = 'Next player: X';
  squares: string[] = Array(9).fill(null);
  xIsNext: boolean = true; 
  constructor(private gameService: GameService) { }
  ngOnInit() {}
  handleClick(location: number) {
    this.squares[location] = this.xIsNext ? 'X':'O'; //assign player to square location
    let winnerCheck = this.gameService.calculateWinner(this.squares);
    if (winnerCheck) { // check for winner
       this.status = winnerCheck+" has won!";
    }else{
      this.status = this.xIsNext ? 'Next player: O' : 'Next player: X';
      this.xIsNext =  !this.xIsNext;
    }
  }
}
