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
});
