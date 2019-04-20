import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  status = 'Next player: X';
  constructor() { }

  ngOnInit() {
  }

}
