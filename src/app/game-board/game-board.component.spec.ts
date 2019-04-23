import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameBoardComponent } from './game-board.component';
import { SquareComponent } from '../square/square.component';

describe('GameBoardComponent', () => {
  let gameboardComponent: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameBoardComponent,SquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent);
    gameboardComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(gameboardComponent).toBeTruthy();
  });
  it('should render status as Next player: X', () => {
    expect(gameboardComponent.status).toContain('Next player: X');
  });
  it('should render all 9 squares empty', () => {
    expect(gameboardComponent.squares.length).toEqual(9);
    expect(gameboardComponent.squares.filter(s => s=='').length).toEqual(0);
  });
  it('should have a handleClick function', () => {
    expect(gameboardComponent.handleClick).toBeDefined;
  });
  it('should have an xIsNext property', () => {
    expect(gameboardComponent.xIsNext).toBeDefined;
  });
  it('handleClick function should change player ', () => {
    gameboardComponent.xIsNext = true //
    gameboardComponent.handleClick(0);
    expect(gameboardComponent.xIsNext).toEqual(false); 
  });
  it('handleClick function should indicate players move ', () => {
    gameboardComponent.xIsNext = true
    gameboardComponent.handleClick(4);
    expect(gameboardComponent.squares[4]).toEqual('X'); 
  });
  it('resetBoard function should reset values', () => {
    gameboardComponent.resetBoard();
    expect(gameboardComponent.status).toEqual('Next player: X');
    expect(gameboardComponent.squares.length).toEqual(9);
    expect(gameboardComponent.squares.filter(s => s=='').length).toEqual(0);
    expect(gameboardComponent.xIsNext).toEqual(true);  
    expect(gameboardComponent.gameOver).toEqual(false);
  });
});
