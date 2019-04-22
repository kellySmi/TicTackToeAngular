import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { SquareComponent } from './square/square.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent, GameBoardComponent, SquareComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tick tack toe'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tick tack toe');
  });

});
