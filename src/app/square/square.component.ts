import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() location: number;
  @Input() squareValue: string;
  @Output() squareEmitter = new EventEmitter<number>();

  constructor(){}
  ngOnInit(){}
  selectSquare(): void{
    this.squareEmitter.emit(this.location);
  }
}
